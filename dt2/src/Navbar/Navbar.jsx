import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <ul>
        <CustomLink to="/Home">
          <img
          src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA3UlEQVRIie2VPwrCMBSHv4o4CS6ewAt4Bye9gEfwCl7BM+gd3JwdRKWnENSxq4MVrIMvEErtnyStoPngB80jL19JWgKecgyAA3CU50YYARGQSCKpKfZS37mUzoBYk6o8gLnM0evWdIBVhjCdpUtxH9iWkGbFmCFwMpQai6fAzUKayBqlCXh/KE9LaSJrLIBWkbQLrB0I09kAvTxxWINUJdRF6S2Ii7bEgrs+CD5McvLz53kKD70uviZuG/Q4OZ7/22ov9uLGxdecnqqX/qXKC02kwfZGOgPjKmLP7/ACLCKp7769VB8AAAAASUVORK5CYII="
            alt=""
          />
        </CustomLink>
        <CustomLink to="/Setting">
          <img
          src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8UlEQVR4nO1W3UpCQRD+8MoCyQt7AdMuCuopIgLtymfoKi3synqGnqK/B7B7QfEV+nmD0EBToTKzWPoWhmGPZ0+aQfTBwtnZmfl2Z8/sDPCPYCyoeRNAI0RnapQAjADkOM8C+OAw3wa71NmfJfExSfoA6gB6grhH2YDzyjRESZ4yBSAO4FoQhY0qbZYBHNCXN0p00gXQikBqR4u25rvoT/t10o7D4Q03tSFkG5TdOvQ79OWNuDrpM3ceEzp2zSLG0L6okxtfoSjxR5J3+gpgy6GriS22aSPv/IS+nVhkOuhwPQAoRCAu0Eb7eZuU53mmjFWWG6kB2ASwAuBKyM13mmu1ANu+eAMCURcGZQB74r5HKodlLluiFm3KYr0eRrqqHK9RbnLxlOEy8ncAZxxjEcpTkbframPZINKm4yQJpfNIuSG0OKfMrEkkHP4aLuKGB3F7AnHbg7gedOpMSKiHlI9JeCFCPQwJdQZz+rmOovxceY90Sqt0uvRIpwHL5q88ICNyOFFkPa2qJ3M7AvGO48ms+DYIukiYh//Qo0iUFWkrajuUCiiLd6xAuiyaTd079LtsCObaCHS+0wgkeScphuo7rU+KPpaiEGtUJjR7T5T1Z9HsaRSZDibPbTGxxPZFyv1EewtHDjYcL9LMG3r8GXwCWVtNc8Ye75UAAAAASUVORK5CYII="
            alt=""
          />
        </CustomLink>
        <CustomLink to="/Notification">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAzCAYAAAD2OArBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgBxVlNVhNBEK7qCT5xY+YE4gmMCwzPVTiB5ATiCcClT4OB4HOJOUHCCYQTmJUvwCaegHiChA1/Jl1WzyRhMn9dM4HHt5r09M831fUfhByo1AfFawdKs4EC9Luf3D7kAEonmkMvHbWFQBXinzE79YGwrQr6MAsZEYE3jcEGAbZ4clGwYx81NU923B8ggJXA6t7FASJtQ0bwxkfLY/rQqbtDy7xklPcvWkS0CfnRezam9TQSKumF+fIFDzcoXTn4M21CLIFy42Irj9jjYBTWfEzS+8gVrNUHK9rBc7hnKKD1bs3tRMdDIAdb8ADQiC1jypBGYHVvsBlr4/cBgpVLB7ZTCaDCryAE312Pd63y4xGIgVthKcwIrDUGFcNSsAugcTYFqp7W3KPTWrHKZDogQ/GqAJuxBAjVexADO3PuFulYvJTwXYSA0fwMNj90UDeDAzcjaBupSBYbHfOkHSQwVjLFM4eoAr3+/dntBcd77OlwROtSEjqg6B4B5cyLJXEhUjUp0nXrbt+Q4Mehfae78zwCpO0SQMT2WejL40jwbk2wozS1BvX228AkFtYwi6QPQYDbMYjCMPuEikdgpEWmN4xzo3Hw9EFgljjRA3MFJetkhB5kgAb6Y5008TmKvd8r62TAPmSAElgDTc5VTNd6/0T6L2SA1gJLIP9cRShzvw8An8CUyWNg7ftgRQE8HgEDJZnEViDwbndwhC5ZTIBIvqG3qZITNgSGgkmZJHD5L4sEBOJ9Os7miHp+HWDd1wQ2qwT4/ju26iYesiRF2WI413miIBTZGKBtmeJJVWlNiV7OkOvuuG3IARO80oLS1LKMI0q8X/76XVgAXMonryc/YKklJ0XBMJv5hXGdorw0kY6a5HexSqYXLFKWFGwkvVMFn5xXG5Ybw1+JFdEiUkioM4xunXwpvjTPBX+ETYawkmWTxYCd6ZNHwOT1Txw4EC0lOub2S0S03Map81tRaRfML71YIM3j/NX4PH5YvQDRcjbtQH45C0apJhOAV9lwHA+OeZUVd88k68OmPdegKO8Pz0ly5/wVxBs5Syy1EayY2l+qK1xZvQwWN4UwO0JBg4IP40KlpUez30LQbriymssHJm43U+STwq8ro/FBRQfoIzwEAR39ev+8EIyGkqy+kx/OdWVSUItNyc5q7naGroflcOgvj3SiVBNzwpux1/9ZSB+8Vo6Ts1NqnNMtt1nzSsI0sczhts65tFtel7pZf1NqLo+hLknlxP8X+B1UqE+6G3HFzNBU0RwrdqWlfCYCc2S4ycQ1ZYm9ZtGkVshZlcmc8ySv/wEDcopJZwTwHgAAAABJRU5ErkJggg=="
            alt=""
          />
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
