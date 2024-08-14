import './breadcrumbs.css'
import { IconBreadcrums } from "../../Icons/Icons";

export function Breadcrumbs({text}) {
  return (
    <aside className="breadcrumbs">
      <figure>
        <IconBreadcrums />
      </figure>
      <span>{text}</span>
    </aside>
  )
}