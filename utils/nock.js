import nock from 'nock';

const SERVER = 'http://test.paddle.com';

function getNock() {
	return nock(SERVER, {
		reqheaders: {
			'user-agent': /paddle-sdk\/\d+/,
		},
	});
}

export default getNock;
const _SERVER = SERVER;
export { _SERVER as SERVER };
