import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export  default prisma;