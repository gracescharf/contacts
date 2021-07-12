import { NextApiRequest, NextApiResponse } from "next"
import { IContact } from "../../models"

const contacts: IContact[] = [
  {
    firstName: "Isaac",
    lastName: "Brock",
    jobTitle: "Singer and guitarist",
    address: "1219 SW Park Ave, Portland, OR 97205",
    email: "isaac.brock@modestmouse.com",
    id: 1,
    handle: "isaac-brock",
  },
  {
    firstName: "Emily",
    lastName: "Haines",
    jobTitle: "Lead singer, keyboardist and songwriter",
    address: "399 Ossington Ave, Toronto, ON M6J 3A6, Canada",
    email: "emily.haines@metric.com",
    id: 2,
    handle: "emily-haines",
  },
  {
    firstName: "Marie-Hélène",
    lastName: "Delorme",
    jobTitle: "Electronic music artist",
    address: "32 Rue Beaubien E, Montréal, QC H2S 1P8, Canada",
    email: "mh.delorme@foxtrott.com",
    id: 3,
    handle: "marie-helene-delorme",
  },
]

const getContacts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(contacts)
}

export default getContacts
