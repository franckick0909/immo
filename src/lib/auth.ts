import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { SupabaseAdapter } from "@auth/supabase-adapter"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  callbacks: {
    async jwt({ token, user }) {

      // Ajoute les données de l'utilisateur au token lors de la première connexion

      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      return token
    },
    async session({ session, token }) {
      // Ajoute les informations du token à la session
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.image = token.picture as string
      }

      return session
    }
  },
  session: { strategy: "jwt" },
  ...authConfig,
})