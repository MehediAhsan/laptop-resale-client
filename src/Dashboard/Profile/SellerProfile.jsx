import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const SellerProfile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the preview and the base64-encoded image
        setImage(btoa(reader.result));
        localStorage.setItem("sellerimage", btoa(reader.result));
      };

      reader.readAsBinaryString(file);
    }
  };

  useEffect(() => {
    setImage(localStorage.getItem("sellerimage"));
  }, [image]);

  return (
    <div className="rounded shadow w-full p-10">
      {/* <h2 className="text-2xl font-semibold mb-8">
        Profile of {user.displayName}
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-3 my-10 divide-y-2 md:divide-y-0 md:divide-x-[1px] divide-primary">
        <div className="flex flex-col col-span-1 row gap-4 justify-center items-center px-16">
          <img
            className="h-40 w-40 rounded-full"
            src={`data:image/jpeg;base64,${image}`}
            alt=""
          />
          <div className="text-center">
            <h1 className="text-xl font-medium">{user?.displayName}</h1>
            <h1 className="">{user?.email}</h1>
          </div>
          <label className="px-3 py-1 rounded border font-medium cursor-pointer">
            Update Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="col-span-2 justify-center items-center ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 w-8/12 mx-auto"
          >
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg"
                defaultValue={user?.email}
              />
            </div>
            <div>
              <label className="font-medium">NID</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg"
                placeholder="Enter National ID Number"
              />
            </div>
            <button className="px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-500 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
