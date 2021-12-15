const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

router.post('/Insert', context => {
    context.state = 200;
    context.body = 'Success';
    // call the insert method here
});
router.put('/update', context => {
    context.state = 200;
    context.body = 'Success';
    // call the get method here
});

router.del('/delete', context => {
    context.state = 200;
    context.body = 'Success';
    // call the get method here
});

router.get('/Get', context => {
    context.state = 201;
    // call the get method here example i have return whatever requested
    context.body = context.request.req;
});

// Here we can route/middleware        
//app.use(async context=>(context.body="Welcome Node Begineer..."));
// register all routes here
app.use(router.routes()).use(router.allowedMethods());
app.listen("7000");