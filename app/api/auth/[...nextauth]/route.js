
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";

console.log(
   { clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,}
)
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({ session}) {

    },

    async signin ({profile})
    {
        try {
            await connectToDB();

            //check if a user already exits.

            const userExists = await User.findOne({
                email: profile.email
            })

            //if the user does not exist

            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace("","").
                    toLowerCase(),
                    image: profile.picture
                })
            }
            return false;
        } catch (error) {
                console.log(error);
                return false;
        }
    }
})

export { handler as GET, handler as POST}