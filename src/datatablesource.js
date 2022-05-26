export const userColums = [
    { field: "id", headerName: "ID", widht: 70},
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell:(params)=>{
        return(
            <div className={"cellWithImg"}>
                <img className={"cellImg"} src={params.row.img} alt="avatar"/>
                {params.row.userName}
            </div>
        )
        }
    },
    {field:"email", headerName: "Email", width:230 },
    {field:"age", headerName: "Age", width:100 },
    {
        field:"status",
        headerName: "Status",
        width:160,
        renderCell:(params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }


]


export const userRows = [
    {
        id: 1,
        userName: 'Snow',
        img: 'https://upload.wikimedia.org/wikipedia/tr/1/12/Jon_Snow_8._Sezonda.png',
        status: "active",
        email: "1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        userName: 'Tyrion Lannister',
        img: 'https://img-s1.onedio.com/id-5c58368c334aa84d15ee960a/rev-0/w-620/f-jpg/s-c460ab366635c74cb576ef0e7a32058e2d87bc78.jpg',
        status: "passive",
        email: "1lannister@gmail.com",
        age: 42
    },
    {
        id: 3,
        userName: 'Jamie Lannister',
        img: 'https://upload.wikimedia.org/wikipedia/tr/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg',
        status: "pending",
        email: "2lannister@gmail.com",
        age: 45
    },
    {
        id: 4,
        userName: 'Arya Stark',
        img: 'https://i.pinimg.com/550x/1f/ea/90/1fea90c12a153005973882270e77c4e8.jpg',
        status: "active",
        email: "stark@gmail.com",
        age: 16
    },
    {
        id: 5,
        userName: 'Daenerys Targaryen',
        img: 'https://i1.sndcdn.com/artworks-8oF8tjvyjmdyWUGE-jLCOpw-t500x500.jpg',
        status: "pending",
        email: "targaryen@gmail.com",
        age: null
    },
    {
        id: 6,
        userName: 'Melisandre',
        img: 'https://i.pinimg.com/736x/79/7b/71/797b71651427b932e8c4da47c7f5c9be.jpg',
        status: "pending",
        email: "melisandre@gmail.com",
        age: 150
    },
    {
        id: 7,
        userName: 'Clifford',
        img: 'https://i.pinimg.com/474x/e1/2b/6f/e12b6fc55ddd00d0c43b42352d04d011--game-of.jpg',
        status: "passive",
        email: "clifford@gmail.com",
        age: 44
    },
    {
        id: 8,
        userName: 'Frances',
        img: 'https://img-s1.onedio.com/id-5769e740446be29806a3d96a/rev-0/w-620/f-jpg/s-f744a457e7f8c14e68a013b16b33d8c53df43bb6.jpg',
        status: "active",
        email: "frances@gmail.com",
        age: 36
    },
    {
        id: 9,
        userName: 'Roxanne ',
        img: 'https://i.pinimg.com/originals/f2/da/35/f2da35401c4f7cb4865c9d9424585373.jpg',
        status: "passive",
        email: "roxanne@gmail.com",
        age: 65
    },
];
