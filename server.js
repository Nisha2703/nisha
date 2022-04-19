let express=require('express')
let app=express()
app.get('/',function(req,res)
{
    res.send('hello from SGT')
}
)
app.listen(3000,function()
{
    console.log('your app is running on the port 3000')
}
)