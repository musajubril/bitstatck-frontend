import { getRequest } from 'api/apiCall'
import { GET_USER } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import React from 'react'
import moment from 'moment'
import { useQuery } from 'react-query'
import Layout from 'components/Layout2'
import addNotification from 'react-push-notification';

export default function User() {
    const {data} = useQuery(
        queryKeys.getUser,
        async () => await getRequest({ url: GET_USER }),
        {
          retry: 2,
        }
    )
    const [user, setUser] = React.useState<any>(data?.data)
    React.useEffect(()=> {
        setUser(data?.data)
        // localStorage.setItem("user", JSON.stringify(data?.data))
    },[data?.data])
    console.log(user)
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    };
  return (
    <Layout>
    <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="">
            <img src={require('../../images/Welcome.gif')} alt="" />
        </div>
        <div className="text-center text-5xl font-bold text-blue-900">
            Welcome User
        </div>
        <button onClick={buttonClick} className="border-yellow-500 px-6 py-2 border-2">
           Hello world.
          </button>
        <div className="text-center">
            <p>{user?.email}</p>
            <p>{user?.phone_number}</p>
            <p>{moment(user?.created).format("LL")}</p>
            {
                user?.activate_referral_code
                ?
                <p className={`bg-red-100 text-red-600 rounded-full font-extrabold`}>{user?.activate_referral_code ? "true" : "false"}</p>
                :
                <p className={`bg-red-100 text-red-600 rounded-full font-extrabold`}>{user?.activate_referral_code ? "true" : "false"}</p>
            }
        </div>
    </div>
    </Layout>
  )
}
