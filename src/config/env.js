let baseUrl="";
if (process.env.NODE_ENV == 'development'){
    baseUrl="/apis"
} else if (process.env.NODE_ENV == 'production'){
    baseUrl = "http://112.124.0.159:80"
}
export{
    baseUrl
}