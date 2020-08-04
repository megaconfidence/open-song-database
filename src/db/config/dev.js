import  dotenv  from  'dotenv' 
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const config = {
  dbUrl: process.env.DEV_DB
}
