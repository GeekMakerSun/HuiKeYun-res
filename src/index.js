import Aegis from 'aegis-web-sdk';
function getComponent() {
	const element = document.createElement('div');
	return import('lodash')
			.then(({default: _}) => {
				const element = document.createElement('div');

				element.innerHTML = _.join(['Hello', 'webpack'], ' ');
				return element;
			})
			.catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
	document.body.appendChild(component);
});


const aegis = new Aegis({
	id: 'DvL19tEQ5GJ4np2mOm', // 上报 id
	uin: 'xxx', // 用户唯一 ID（可选）
	reportApiSpeed: true, // 接口测速
	reportAssetSpeed: true, // 静态资源测速
	spa: true // spa 应用页面跳转的时候开启 pv 计算
});


if (process.env.NODE_ENV !== 'production') {
	console.log('现在处于开发模式');
}