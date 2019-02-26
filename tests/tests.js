import './html-equal.js';
import makeHtmlTemplate from '../src/make-html-template.js';

const test = QUnit.test;

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

test('does the hardcoded html match the dynamic function output', assert => {
    //arrange
    let expected = `
            <li>
                <h2>UniWhal</h2>
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            </li>
        `;
    //act
    let result = makeHtmlTemplate(image);

    //assert
    assert.htmlEqual(result, expected);
});