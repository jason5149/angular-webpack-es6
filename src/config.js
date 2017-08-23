const config = ($httpProvider) => {
    console.log($httpProvider);

    $httpProvider.interceptors.push('Interceptor');
}

config.$inject = ['$httpProvider'];

export default config;