import { auth, currentUser } from "@clerk/nextjs/app-beta";
import { prisma } from "../server/db/client";

export default async function Home() {
  const { userId } = auth();
  console.log("home", userId);
  // const user = await currentUser();

  let user = null;

  if (userId) {
    user = await prisma.user.findUnique({ where: { id: userId } });
    console.log("does user exist?", user);

    if (!user) {
      user = await prisma.user.create({ data: { id: userId } });
      console.log("after sync", user);
    }
  }

  if (userId && user) {
    return <div>Welcome, {user?.firstName || "User"}</div>;
  }

  return <div>Home</div>;
}
