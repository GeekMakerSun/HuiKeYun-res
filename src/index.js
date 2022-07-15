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

if (process.env.NODE_ENV !== 'production') {
	console.log('现在处于开发模式');
}