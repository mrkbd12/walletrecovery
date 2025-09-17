const {ethers,utils} = require('ethers');
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider('https://distinguished-prettiest-bush.bsc.quiknode.pro/6153a7f2821e488f5a6565c160460c2727727898/') 

const mnemonic = 'puzzle guard air express flame other return slot price wrap engage swift';

const hdNode = utils.HDNode.fromMnemonic(mnemonic);


deriviation = {
     metamask : "m/44'/60'/0'/0/",
     ledger : "m/44'/60'/"

}


const tries = 10;

async function getAccount(){
    for(let i=0;i<tries;i++){
        let path = deriviation.metamask + i;
        console.log(path)
        let a = hdNode.derivePath(path);
        console.log(a.address)
        const balance = await provider.getBalance(a.address)
        const content = a.address + "\n" + ethers.utils.formatEther(balance) + "\n";
        fs.appendFile('address.txt', content, err =>{
            if(err){
                console.error(err);}});
        if(a.address == '0xD2C02d4b1E964b49D0b1611A741b33446578553E'){ //add your address
            console.log(a.address)
            console.log(a.privateKey)
        }
    }
}
getAccount()
