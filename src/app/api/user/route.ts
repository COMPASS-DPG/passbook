import fetchRolesFromFrac from '@mock/frac';
import fetchUserById from '@mock/userOrg';
import {
  addRolesAndCompetency,
  addUser,
  addUserInfo,
} from '@prismaClient/userDbAction';
import { addRolesSchema } from '@prismaClient/userType';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');
    // Use Prisma to fetch the user based on userId
    if (userId) {
      const [user, isNew] = await addUser(userId);
      if (!isNew) {
        return NextResponse.json(user, { status: 200 });
      } else {
        try {
          const { name, rootOrganization, phone } = await fetchUserById(userId);
          await addUserInfo(
            userId,
            name,
            rootOrganization.team.name,
            phone,
            rootOrganization.position
          );
          // console.log("user info of user has been updated")
          const rolesAndCompetency: { roles: addRolesSchema[] } =
            await fetchRolesFromFrac(userId);
          await addRolesAndCompetency(userId, rolesAndCompetency.roles);
        } catch (err) {
          return NextResponse.json(
            {
              error:
                'User not found, failed to fetch data from userservice/frac',
            },
            { status: 404 }
          );
        }
      }
    }
    return NextResponse.json(
      { error: 'Please pass valid userId value' },
      { status: 404 }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  } finally {
    // eslint-disable-next-line no-console
    console.log(NextResponse);
    // await prisma.$disconnect();
  }
}

// const userService = () => {
//   // const userService = (userId: string) => {
//   return userInfo;
// };
// const fracService = (designation: string) => {
// const fracService = () => {
//   // const myHeaders = new Headers();
//   // myHeaders.append("Content-Type", "application/json");
//   //
//   // const raw = JSON.stringify({
//   //     "desgination": "software engineer"
//   // });
//   //
//   // const requestOptions = {
//   //     method: 'POST',
//   //     headers: myHeaders,
//   //     body: raw,
//   //     redirect: 'follow'
//   // };
//   // let resp = null;
//   // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // // @ts-ignore
//   // fetch("http://test-compass.free.beeceptor.com/frac/getrole", requestOptions)
//   //     .then(response => response.text())
//   //     .then(result => {console.log(result); resp = result})
//   //     .catch(error => console.log('error', error));
//   // console.log(designation)
//   return rolesAndCompetencyData;
// };

export async function POST(req: NextRequest) {
  // console.log(req)
  try {
    const { userId } = await req.json();
    if (userId !== null && userId.length > 0) {
      // Use Prisma to fetch the user based on userId
      const [user, isNew] = await addUser(userId);
      // check if user object is there
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      // check if user object is new or just fetch is done
      if (isNew) {
        //adding different values to the new user OBject
        const { name, rootOrganization, phone } = await fetchUserById(userId);
        await addUserInfo(
          userId,
          name,
          rootOrganization.team.name,
          phone,
          rootOrganization.position
        );
        // console.log("user info of user has been updated")
        const rolesAndCompetency: { roles: addRolesSchema[] } =
          await fetchRolesFromFrac(userId);
        await addRolesAndCompetency(userId, rolesAndCompetency.roles);
        // console.log("frac data of user has been updated")
      } else {
        //fetching the frac and user service again for the user
        // FIXME: have to change with the services
        const { name, rootOrganization, phone } = await fetchUserById(userId);
        await addUserInfo(
          userId,
          name,
          rootOrganization.team.name,
          phone,
          rootOrganization.position
        );
        // FIXME: have to change with the services
        const rolesAndCompetency: { roles: addRolesSchema[] } =
          await fetchRolesFromFrac(userId);

        await addRolesAndCompetency(userId, rolesAndCompetency.roles);
        return NextResponse.json(
          { message: 'user was already there' },
          { status: 200 }
        );
      }
      //response if user is created
      // console.log(user)
      return NextResponse.json({ message: 'user is created' }, { status: 201 });
    }
    return NextResponse.json(
      { error: 'please pass some userId' },
      { status: 403 }
    );
    // return NextResponse.json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    // eslint-disable-next-line no-console
    console.log(NextResponse);
  }
}

// export async function POST(req) {
//     // Handle POST request
//     // ...
//     return NextResponse.json({ message: 'Hello from POST' });
// }
