// Index Controller

export function helloWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World From Controller');
};