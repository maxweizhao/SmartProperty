"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding)
{
    // Inherit from Pudding. The dependency on Babel sucks, but it's
    // the easiest way to extend a Babel-based class. Note that the
    // resulting .js file does not have a dependency on Babel.

    var Lock = (function (_Pudding)
    {
        _inherits(Lock, _Pudding);

        function Lock()
        {
            _classCallCheck(this, Lock);

            _get(Object.getPrototypeOf(Lock.prototype), "constructor", this).apply(this, arguments);
        }

        return Lock;
    })(Pudding);

    ;

    // Set up specific data for this class.
    Lock.abi = [{ "constant": false, "inputs": [{ "name": "_userId", "type": "uint256" }], "name": "deposit", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_price", "type": "uint256" }, { "name": "_startTime", "type": "uint256" }, { "name": "_endTime", "type": "uint256" }], "name": "updateRentInfo", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "getRentInfo", "outputs": [{ "name": "", "type": "uint256[3]" }], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "userId", "type": "uint256" }, { "indexed": false, "name": "startTime", "type": "uint256" }, { "indexed": false, "name": "endTime", "type": "uint256" }], "name": "GrantAccess", "type": "event" }];
    Lock.binary = "6060604052610124806100126000396000f3606060405260e060020a6000350463b6b55f258114610031578063cbaf566d14610047578063d506355c1461005e575b005b6100bc600435600080543410156100df57610002565b60043560005560243560015560443560025561002f565b6100c660c060405260606003815b600081526020019060019003908161006c575050604080518083019091526003815b600081526020019060019003908161008e575050600054815260015460208201526002546040820152919050565b6060908152602090f35b6040518082606080838184600060046018f15093505050f35b6003829055600154600254606084815260809290925260a0527f2cc77e7d99fd9e51b73bdf57f929ef5cdfaa7fdbefdd1b10c5ef93e88e66e1829080a150600191905056";

    if ("0x0e7e4e2b408adff6daf54260cefca330056a185c" != "") {
        Lock.address = "0x0e7e4e2b408adff6daf54260cefca330056a185c";

        // Backward compatibility; Deprecated.
        Lock.deployed_address = "0x0e7e4e2b408adff6daf54260cefca330056a185c";
    }

    Lock.generated_with = "1.0.3";
    Lock.contract_name = "Lock";

    return Lock;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
    module.exports = factory;
} else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Lock = factory;
}
