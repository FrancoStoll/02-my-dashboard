import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoReact, IoMoon } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItem = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualizacion'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoMoon size={40} />,
    title: 'Pokemons',
    subtitle: 'Generacion Estática'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} className="text-red-500" />,
    title: 'Pokemons Favorites',
    subtitle: 'Generacion Estática'
  },
]




export const Sidebar = () => {
  return (

    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0" style={{ width: "300px" }}>

      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">Board</span>

          .</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="user_avatar" width={50} height={50} />
          </span>
          <span className="text-sm md:text-base font-bold">
            Cosme Fulanito
          </span>
        </a>
      </div>

      {/* Navbar */}
      <div id="nav" className="w-full px-6">


        {
          menuItem.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }

      </div>

    </div>
  )
}

