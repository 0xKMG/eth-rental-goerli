const RentalContract = artifacts.require("./Rentals.sol");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function (callback) {
  async () => {
    const contractInstance = await RentalContract.deployed();

    const owner = await web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

    await instance.addProperty(
      web3.utils.toWei("0.00156"),
      "Ocean Sea Block 2",
      "1 bedroom with a nice view",
      "https://google.com",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ocean_Pride_in_2020.jpg/1200px-Ocean_Pride_in_2020.jpg",
      { from: owner.address }
    );

    await instance.addProperty(
      web3.utils.toWei("0.002"),
      "MK House",
      "2 bedrooms with a really bad view",
      "https://google.com",
      "https://cdn.hk01.com/di/media/images/dw/20220117/559776922540707840591268.jpeg/NDKhrQPBhoMyjVDiGlsOEr3ZhvcR3mBIrjRDKa40Qyk?v=w1920r16_9",
      { from: owner.address }
    );

    await instance.addProperty(
      web3.utils.toWei("0.0042"),
      "Mountain Pride 69",
      "Instagrammable with great community",
      "https://google.com",
      "https://581933-1884027-3-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/choi-h.jpg",
      { from: owner.address }
    );

    console.log("Listed three apartments");

    callback();
  };
};
