//import {config} from 'dotenv'
import env from 'env-var';

const PORT  = env.get('PORT').default('5432').asPortNumber();

console.log(PORT)

/*console.log(process.env.PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)*/