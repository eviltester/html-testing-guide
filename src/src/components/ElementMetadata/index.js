import React from 'react';

export function UsefulLinks({data}) {

    return (
        <ul>
            {data['links'].map((value,index)=>{ return <li><a href={value}>{value}</a></li>})}
        </ul>
    );
}

export function TestIdeas({data}) {

    return (
        <ul>
            {data['ideas'].map((value,index)=>{ return <li>{value}</li>})}
        </ul>
    );
}


export function CSSSelectors({data}) {

    return (
        <ul>
            <li>{data['cssSelector']}</li>
        </ul>
    );
}


// Limitation in Docusaurus is that headings generated by mdx are not shown in TPC so can't
// auto generate the full section yet
export function ShowMetaData({data}) {


    let linksSection;

    if(data['links']){
        linksSection = 
            <div>
                <h2>Useful Links</h2>
                <ul>
                    {data['links'].map((value,index)=>{ return <a href={value}>{value}</a>})}
                </ul>
            </div>
    }

    return (
      <section>
        <h2>Component</h2>
        {linksSection}
      </section>
    );
  }

 