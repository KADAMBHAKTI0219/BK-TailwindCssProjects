import React from 'react'

const MasonryLayout = () => {
    const data = [
        { id: 1,height: "h-70",img:'https://avatars.mds.yandex.net/i?id=5426ce52e075a95472813f973875eae53ed3e87c-5026103-images-thumbs&n=13' },
        { id: 2,height: "h-89",img:'https://avatars.mds.yandex.net/i?id=b317c6c317db970bfd013bcf3a2c803e0a6f9951-10183962-images-thumbs&n=13' },
        { id: 3,height: "h-90",img:'https://avatars.mds.yandex.net/i?id=4804d17c0d38d37d6e3888ea5357fcbd33f376f4-4936976-images-thumbs&n=13' },
        { id: 4,height: "h-67",img:'https://avatars.mds.yandex.net/i?id=b973a7f16f47b6e88b5d63a9cf5c1ce771a380f5-5151070-images-thumbs&n=13' },
        { id: 5,height: "h-89",img:'https://avatars.mds.yandex.net/i?id=7257a910a06fd7d1dc1b77bb37615bdd-5666463-images-thumbs&n=13' },
        { id: 6,height: "h-90",img:'https://avatars.mds.yandex.net/i?id=efa07ce8e732fa76070ba45a56d217f9f3c6ca41-5544440-images-thumbs&n=13' },
        { id: 7,height: "h-64",img:'https://avatars.mds.yandex.net/i?id=2f9f6941bfba5b0833854f42f70c362b55b7b480-13020977-images-thumbs&n=13'},
        { id: 8,height: "h-40",img:'https://avatars.mds.yandex.net/i?id=1e0a796481a3d1eb964197c3e029f337fb6ed94a-4079989-images-thumbs&n=13' },
        { id: 9,height: "h-56",img:'https://avatars.mds.yandex.net/i?id=1e0a796481a3d1eb964197c3e029f337fb6ed94a-4079989-images-thumbs&n=13' },
        { id: 10,height: "h-72",img:'https://avatars.mds.yandex.net/i?id=46757e7092290d683f753d15e5b591b1b0d38af7-7012054-images-thumbs&n=13' },
        { id: 11,height: "h-48",img:'https://avatars.mds.yandex.net/i?id=e540b8cb6a3edf080ff8814deeb9e558e3395062-5147050-images-thumbs&n=13'},
        { id: 12,height: "h-64",img:'https://avatars.mds.yandex.net/i?id=0f7dc1fdc4e47387cd7f99ed99ba07ecc7d4dc59-5878500-images-thumbs&n=13' },
        { id: 13,height: "h-40",img:'https://avatars.mds.yandex.net/i?id=308f0ffe7d9f075bf0bd2f6c335253b5c8694d42-10018920-images-thumbs&n=13'},
        { id: 14,height: "h-56",img:'https://avatars.mds.yandex.net/i?id=3b9f0e96ec4edb0e65b7670e3ba616130131bfe1-5207234-images-thumbs&n=13' },
        { id: 15,height: "h-72",img:'https://avatars.mds.yandex.net/i?id=3b9f0e96ec4edb0e65b7670e3ba616130131bfe1-5207234-images-thumbs&n=13'},
        { id: 16,height: "h-60",img:'https://avatars.mds.yandex.net/i?id=679939cc1e74059f3754ab41d0cd078b51f9455a-5448346-images-thumbs&n=13' },
        { id: 17,height: "h-64",img:'https://avatars.mds.yandex.net/i?id=b271106f0c8cfc3af687208b445494e2204ec1da-12532291-images-thumbs&n=13' },
        { id: 18,height: "h-40",img:'https://avatars.mds.yandex.net/i?id=1c92bc24a60f79e2758baf3819f24b1a76b2c52360524505-12923036-images-thumbs&n=13' },
        { id: 19,height: "h-56",img:'https://avatars.mds.yandex.net/i?id=5d6413ec3f4e7cdd6595aabf0a07d9ab66ae07a1-4353501-images-thumbs&n=13' },
        { id: 20,height: "h-72",img:'https://avatars.mds.yandex.net/i?id=690bd7afcc446fd2b25d2a1d5c3a4e83edd26b3e-5233722-images-thumbs&n=13'},
        { id: 21,height: "h-80",img:'https://avatars.mds.yandex.net/i?id=679939cc1e74059f3754ab41d0cd078b51f9455a-5448346-images-thumbs&n=13' },
        { id: 22,height: "h-64",img:'https://avatars.mds.yandex.net/i?id=b271106f0c8cfc3af687208b445494e2204ec1da-12532291-images-thumbs&n=13' },
        { id: 23,height: "h-40",img:'https://avatars.mds.yandex.net/i?id=1c92bc24a60f79e2758baf3819f24b1a76b2c52360524505-12923036-images-thumbs&n=13' },
        { id: 24,height: "h-56",img:'https://avatars.mds.yandex.net/i?id=5d6413ec3f4e7cdd6595aabf0a07d9ab66ae07a1-4353501-images-thumbs&n=13' },
        { id: 25,height: "h-72",img:'https://avatars.mds.yandex.net/i?id=690bd7afcc446fd2b25d2a1d5c3a4e83edd26b3e-5233722-images-thumbs&n=13'},
      ];
    
      return (
        <div className="p-8 ">
          <div className="sm:columns-1 md:columns-3 lg:columns-3 gap-7">
            {data.map((item,index) => (
              <div key={item.index}
                className={`mb-4 ${item.height} ${item.bg} text-white rounded-lg  shadow-2xl flex items-center justify-center`}
              >
                <img src={item.img} alt="image" className="object-fill object-center h-full w-full rounded-lg"></img>
              </div>
              
            ))}
          </div>
        </div>
      );
};

export default MasonryLayout;
