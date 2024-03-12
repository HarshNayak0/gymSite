export default function NavItem({ itemName, itemLink, itemClass }) {
  return <>
  <a className="nav-item"href={itemLink}><h3 className="nav-item-title">{itemName}</h3></a>
  </>;
}
