import React from 'react';
import './main.css';


const Main = () =>  {
    return(
      <main className='main'>
        <p className='block_title'>rappresent your life with a simple photo</p>
        <div className='block_main_title_description'> 
        {/* Тут нужно в див с большим текстом добавить флекс и выровнять посредине, а марджин у тега р убрать */}
        <p className='block_title_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit est, ullamcorper a vestibulum eu, 
        pulvinar ut orci. Donec gravida orci non suscipit consequat. Suspendisse ut dui sed tortor ultrices tempus. 
        Phasellus dictum lectus ex, ut placerat massa pharetra at. Nullam felis dolor, volutpat nec congue eget, ornare
        vitae quam. In finibus urna vel molestie tempus. Duis et convallis odio, convallis porta eros. Curabitur vel leo turpis. <br />
        Morbi consequat ante in odio varius hendrerit. Vestibulum varius pretium mattis. <br/>
        <br/>
        Aliquam vulputate maximus est, quis 
        euismod elit sodales placerat. Proin pretium arcu a odio consectetur, nec vestibulum nisi venenatis. Nulla eleifend
        nisi vel pretium aliquam. Cras ornare elementum vehicula. Curabitur at hendrerit nisl. Donec ligula mauris, commodo 
        non diam et, aliquam aliquet lectus. Maecenas volutpat, nisl in consectetur condimentum, ligula mauris fringilla mauris, 
        eu aliquet mauris ligula at orci. Cras efficitur non massa in auctor. Sed posuere leo quam, sed varius massa euismod sit 
        amet. Proin vehicula egestas massa. Nullam tempus massa a elementum posuere. Nam ac velit ac purus vestibulum fringilla. 
        Nunc a tortor posuere, ultrices nisi id, interdum risus. Donec laoreet tempus libero ut viverra. Proin dapibus magna vel urna ornare, et pretium metus facilisis.
        </p>
        </div>
        <div className='block_main_button'><button>get started</button></div>
      </main>
    )
}
  
export default Main