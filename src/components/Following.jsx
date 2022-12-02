import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";

const Following = () => {
  const [change, setChange] = useState(true);
  const [following, setFollowing] = useState([]);
  const getfollowers = JSON.parse(localStorage.getItem("followers"));
  const user = JSON.parse(sessionStorage.getItem("userlogin"));

  const url = `https://api.github.com/users/${user}/following`;

  const getFollowing = async () => {
    try {
      const { data } = await axios(url);
      setFollowing(data);

      // console.log(data);
    } catch (error) {
      console.log("İkaz!!!");
    }
  };

  useEffect(() => {
    getFollowing();
  }, []);

  const fallowingName = following.map((item) => item.login);
  // console.log(fallowingName)
  const fallowersName = getfollowers.map((item) => item.login);

  // const bad=fallowingName.filter((item)=>item.Following)
  // console.log(bad);
  //
  const bad = fallowingName.filter(
    (element) => !fallowersName.includes(element)
  );
  console.log("bad :>> ", bad);
  //
  const good = fallowersName.filter(
    (element) => !fallowingName.includes(element)
  );
  //
  console.log("good :>> ", good);

  // console.log('bad :>> ', bad);
  //
  // console.log('following', following)
  console.log(change);
  //
  return (
    <>
      <NavBar />

      <div className="text-center" >
        <Button className="p-2 m-2 text-center " onClick={() => setChange(false)}>kötüler</Button>
        <Button className="p-2 m-2 text-center " onClick={() => setChange(true)}>sevmediklerimiz</Button>
      </div>
      <div className="main">
        {change
          ? good.map((item) => {
              return (
                <div className="card">
                  <h4>{item}</h4>
                  <a href={`https://github.com/${item}`} target="_blank">
                <Button variant="outline-info">Visit My Page</Button>
                  </a>
                </div>
              );
            })
          : bad.map((item) => {
              return (
                <div className="card">
                  <h4>{item}</h4>
                  <a href={`https://github.com/${item}`} target="_blank">
                   <Button variant="outline-info">Visit My Page</Button>
                  </a>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Following;
