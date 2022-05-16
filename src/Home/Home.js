import React from 'react'
const c1 = require("./img1.png")
const c2 = require("./img2.png")
const Home=() =>{
  return (
    <div>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={c1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={c2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      <div className='display-3 text-center'>Our Recruiters</div>
      <div className='row m-0 p-4 justify-content-center align-items-center'>
        <div className='col-2'><img src='data:image/png;base64,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' className='w-100' alt='Company'></img></div>
        <div className='col-2'><img src='data:image/jpeg;base64,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' className='w-100' alt='Company'></img></div>
        <div className='col-2'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAclBMVEX////lCRTkAADlABD++fn83N7mGyP3wMLweX71sLLvgoX1rK/lAAj+9vfrSlD72Nr97/DnEB3wfoLpPUP96uv95efsWl/4u771pan5x8roKzLrQEj70tTzlZnvbXL3trnnIivqMzvtY2nznJ/qU1fwjZCE6y5/AAAC40lEQVRoge2W2ZaiMBBAs7CpYVMQUGnB5f9/caoSkKU74Jx2nqbugyQCuUmoVMIYQRAEQRAEQRAEQRAEQRAE8b8QCgALWVeIxUDONqOadNluVGUsgN/y1VIBtS9oMILrFv8o8anQ4nUE56KCQiIlR6/rSW6QXs6ugvfIE3bjVUsZ2woudq+WfKgFcN0Jrk4JdOABf2xt49Xe/dwrEaW9UNAeqXqvuWn16hZ9xi6CS3FZ8somm3lTTZPD5MEVxWnKW+M193hj88L0c3Fk7AaXyKbVXi6KiVcd3EQDt+G3gomLcl3dYNthf9PirWA6PDeH/uOwF73HmTcZPxKj18QHevevGxavc1Zc3Et4a9rOdy90b+rNfuOFQIYWW2iutmqNl8Ny+KA3g4iA1qSwD7fzqvMH51lHFg4msGs7Lxf5yCubIAi+jv0amHo59wAI9QVvZbzVmhc/RciHdSR1QuqDce7F1csXvQyXnmoXtNqbniQslHSWr6xe3dFl7x1zx2bNK2t4xffm4y1+9vape9VrzVW9V8SpVMfT8H1PZVH4RR9c3+LKAdiiV8Cc4Sax4nUeCsKFfyyeryZobHvRy8vqLqrZR9av8zDxfF31Zh/14jKSJvuuePse/r13CNrBCzuRbFE8aeYnL6bUkfesLU7yhnfvVxc3C8feGFdkEcHm8Fz1ZmMv96JDA+slzVe93aoS8XT/VQcHHlXn5f0IdbB3DV6uFJ4pvDe8XY4ZeUOhd6KskUuZsvfuxNirs+EwXiEOxovnuiHb77vBKjX24i6o4Mt+Qf226nUbTFNY6KYubaObiYvkXpaFThQsdF13mDu/rp/PbXB7RLB/6/MkeMOTkPo4h+craY2s3suOoIKzGsu2dVnEeZYloWPt7bSJMEzg0aQq7pBaL4fWEy72ESNrZ32pPz9fiirO3xOtkLnms96h5bPV+7xeFo4Fv8Mt6qVcSRAEQRAEQRAEQRAEQRAEQfwb/gApjinSEUmDQwAAAABJRU5ErkJggg==' className='w-100' alt='Company'></img></div>
        <div className='col-2'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' className='w-100' alt='Company'></img></div>
        <div className='col-2'><img src='https://imageio.forbes.com/specials-images/imageserve/5c13d14731358e5b4339c564/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=87&width=87' className='w-100' alt='Company'></img></div>
      </div>



      <div className='row m-0 p-0 text-center'>
        <div className='col p-4' style={{background: "#caf0f8"}}>
          <h1 className='display-1'>20</h1>
          <h1>Total Jobs</h1>
        </div>
        <div className='col p-4' style={{background: "#ffddd2"}}>
        <h1 className='display-1'>120</h1>
        <h1>Total Students</h1>

        </div>
        <div className='col p-4'style={{background: "#f5ebe0"}}>
        <h1 className='display-1'>200</h1>
        <h1>Total Applications</h1>

        </div>
        <div className='col p-4'style={{background: "#dde5b6"}}>
        <h1 className='display-1'>60</h1>
        <h1>Total Offers</h1>

        </div>
      </div>
    </div>
  );
};
export default Home;
