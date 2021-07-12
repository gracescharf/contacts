import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ContactsList from "../components/ContactsList.tsx"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactsList />
      <Link href="/add">
        <a>Add New Contact</a>
      </Link>
    </div>
  )
}
