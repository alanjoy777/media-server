const JSONServer=  require('json-server')

const MPlayerServer= JSONServer.create()

const router= JSONServer.router('db.json')

const middleware= JSONServer.defaults()

const PORT=3000 || process.env.PORT


MPlayerServer.use(middleware)
MPlayerServer.use(router)

MPlayerServer.listen(PORT,()=>{
    console.log((`mediaplayer server started running at PORT:${PORT},and waiting for the client request...`));
    
})
