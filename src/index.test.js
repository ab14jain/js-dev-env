import {expect} from 'chai';
import {jsdom} from 'jsdom';
//import {fs} from 'fs';
var fs = require('fs');

describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', ()=> {
    it('should say hello', (done) => {
        const file = './src/index.html';
        const index = fs.readFileSync(file, 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World');
            done();
            window.close();
        });
    });
})