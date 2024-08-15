export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    // defaultHeader son las cabeceras por defecto que van a tener mis peticiones 
    const defaultHeader = {
      accept: "application/json",
    };
    // AbortController(); Es un manejador de errores para cuando el endpoint
    // que consultamos no nos responde, podamos cancelar la ejecución
    const controller = new AbortController();
    options.signal = controller.signal;
    // option.method si no se especifica un "metodo", por defecto es GET, sino será el method. 
    options.method = options.methos || "GET";

    // cabeceras - si existe una cabecera por options, mezclamos las por defecto y las
    // que vienen por parámetro, sino solo ponemos las de por default.
    options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
    
    // options.body para las peticiones POST ó PUT donde se necesita la info y esta la parseamos
    // a un objeto JSON.
    options.body = JSON.stringify(options.body) || false;
    // si no existe un body ( es decir se hizo una peticion GET ó DELETE ), la propiedad body
    // se inicializa en false, y si esto sucede, con el if de abajo borro la propiedad BODY.
    if(!options.body) delete options.body;
    console.log(options);
    
    // Este temporizador es para que no me quede en un bucle la peticion en caso de no
    // encontrar resultados, y en 5 seg ( 5000 mseg.) se aborte la petición.
    setTimeout(() => { controller.abort() }, 3000);

    return fetch(endpoint, options)
      .then((res) => res.ok ?
        res.json()
        :
        Promise.reject({
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error en la petición."
        })
      )
      .catch(err => err)
  }
  
  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del }
}