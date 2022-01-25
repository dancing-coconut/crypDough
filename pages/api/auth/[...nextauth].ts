import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "d77ef06a55dfb069e226",
      clientSecret: "331b7e59e47f9b271f86d09c558946f69c9cda93",
    }),
    GoogleProvider({
      clientId: "1037563317624-teahggjmq2133sjel5vigih8r7q08q6j.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "1362444754226887",
      clientSecret: "203c97736e4d6dd8dce795b023b1a1c7",
      // clientId: process.env.FACEBOOK_CLIENT_ID,
      // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
