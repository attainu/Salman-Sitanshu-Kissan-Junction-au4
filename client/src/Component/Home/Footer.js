import React from 'react';

export default function Footer() {
  return (
    <>
      <div class="d-flex flex-row justify-content-around flex-wrap text-white bg-dark p-5">
        <div class="d-flex flex-column justify-content-around">
          <div class="d-flex flex-row  justify-content-around">
            <img className='mr-1 flex-fill'
              src='https://www.freepnglogos.com/uploads/nature-png/natural-health-logos-32.png'
              width='50px' height='50px' />
            <h2 className='m-1' style={{ 'font-weight': '800', color: "#28ca2f" }}>Agricon</h2>
          </div>
        </div>
        <div class="p-2">Flex item 2</div>
        <div class="p-2">Flex item 3</div>
      </div>
    </>

  );

}
