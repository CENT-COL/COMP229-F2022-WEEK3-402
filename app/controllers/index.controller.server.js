// Index Controller

export function helloWorld(req, res, next){
    res.render('index', { title: 'Home' });
};