import moment from 'moment'
import async from 'async'

const getCategoryAndColorCode = (v) => {
    return new Promise(resolve => {
        if (v >= 0 && v <= 50) {
            return resolve({ bgColor: "#55a84f", category: "Good" })
        }
        if (v >= 51 && v <= 100) {
            return resolve({ bgColor: "#a3c853", category: "Satisfactory" })
        }
        if (v >= 101 && v <= 200) {
            return resolve({ bgColor: "#fff833", category: "Moderate" })
        }
        if (v >= 201 && v <= 300) {
            return resolve({ bgColor: "#f29c33", category: "Poor" })
        }
        if (v >= 301 && v <= 400) {
            return resolve({ bgColor: "#e93f33", category: "Very Poor" })
        }
        if (v >= 401 && v <= 500) {
            return resolve({ bgColor: "#af2d24", category: "Severe" })
        }
    });
}

export const SocketAQIData = (prevData, nd = []) => {
    let od = !!prevData && prevData.liveData ? prevData.liveData : []
    nd = nd || []
    let aqiHistory = !!prevData && prevData.historyData ? prevData.historyData : {};

    for (let odi of od) {
        if (!odi.lastUpdatedOn) {
            odi.lastUpdatedOn = moment().format()
        }
        for (let i = 0; i <= nd.length; i++) {
            if (!!nd[i]) {
                if (nd[i].city === odi.city) {
                    odi.aqi = nd[i].aqi
                    odi.lastUpdatedOn = moment().format()
                    nd.splice(i, 1)
                } else {
                    nd[i].lastUpdatedOn = moment().format()
                }
            }
        }
    }
    let fd = [...od, ...nd]
    let cities = fd.map(v => v.city)
    cities.sort()
    cities = cities.map((v, i) => {
        v = (fd.filter(fdv => fdv.city === v))[0]
        return v;
    })
    async.mapLimit(cities, 12, async function (v) {
        const aqi = parseFloat(parseFloat(v.aqi).toFixed(2))
        const d = await getCategoryAndColorCode(aqi);
        v.bgColor = d.bgColor
        v.category = d.category
        v.lups = moment(v.lastUpdatedOn).fromNow()

        if (!aqiHistory[v.city]) {
            aqiHistory[v.city] = []
        }
        aqiHistory[v.city].push(aqi)
        if (aqiHistory[v.city].length > 10) {
            aqiHistory[v.city].shift()
        }
        return v;
    }, (err, result) => {
        if (!err) {
            cities = result;
        }
    })
    return { liveData: cities, historyData: aqiHistory }
}