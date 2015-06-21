(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.distance = function(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };
    ext.constants = function(name) {
        if(name == 'pi') {
            return Math.PI;
        } else if (name == 'e') {
            return Math.E;
        } else if (name == 'infinity') {
            return Infinity;
        } else if (name == 'golden ratio') {
            return 1.61803398875;
        } else {
            return;
        }
    }
    ext.factorial = function(num) {
        var rval=1;
        for (var i = 2; i <= num; i++) {
              rval = rval * i;
        }
        if(true) {
        return rval;
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', '%n ^ %n', 'power', 2, 3],
            ['r', 'distance from x: %n y: %n to x: %n y: %n', 'distance', 0, 0, 30, 40],
            ['r', 'constant %m.constants', 'constants'],
            ['r', 'factorial of %n', 'factorial', 5]
        ],
        menus: {
           constants: ['pi', 'e', 'infinity', 'golden ratio']
        }
    };

    // Register the extension
    ScratchExtensions.register('Extended Math', descriptor, ext);
})({});
