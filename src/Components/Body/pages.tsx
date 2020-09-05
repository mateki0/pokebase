import React,{useEffect, useState} from "react";
import styled from 'styled-components';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

interface ShowProps{
    showMultiple:boolean
}
const PagesComponent = styled.div`
    margin:30px auto 0 auto;
    padding-bottom:10px;
`
const PagesUl = styled.ul`
    list-style-type:none;
    display:flex;
    align-items:center;
`
const Page = styled.li`
    padding:0 5px ;
    color:#0424D9;
    font-size:24px;
    font-weight:600;
    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }
`
const PagePop = styled.input<ShowProps>`
    position:relative;
    bottom:20px;
    margin-left:55px;
    width:30px;
    padding:5px
    background:#fff;
    display:none;
    ${({showMultiple}) => showMultiple && `
        display:block
    `}
    
`
const Next = styled(MdChevronRight)`
margin-top:4px;
    padding:0;
    font-size:34px;
    transition: color .5s;
    &:hover{
        color:#e6001f;
    }

`
const Prev = styled(MdChevronLeft)`
margin-top:4px;
    padding:0;
    font-size:34px;
    transition: color .5s;
    &:hover{
        color:#e6001f;
    }
`

const Pages = ({...props}) => {
    
    
    const [showMultiple, setShowMultiple] = useState(false);
    const allPages = Math.ceil(props.length/12);
    const [pageList, setPageList] = useState<Array<any>>([])
    const pages:Array<any> = [];
    
    
    const handleMulti = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        
        setShowMultiple(true)
    }
    useEffect(() => {
        setShowMultiple(false)
        const renderPages = (additionalPages:number) => {
            if(props.page > 1){
                pages.push(<Page key='prev' onClick={()=>props.prevPage()} ><Prev/></Page>)
            }
            if(props.page >= 3) {
                pages.push(<Page key='1' onClick={(e)=>props.choosePage(e)} style={props.page===1 ? {color:'#e6001f', textDecoration:'underline'} : {color:'#0424D9'}}>1</Page>);
                pages.push(<Page key='multi' onClick={(e)=>handleMulti(e)}>...</Page>)
                for(let i=props.page; i<=props.page+additionalPages; i++){
                    pages.push(<Page key={i} onClick={(e)=>props.choosePage(e)} style={props.page===i ? {color:'#e6001f', textDecoration:'underline'} : {color:'#0424D9'}}>{i}</Page>)
                    setPageList(pages)
                }
        } else{
            for(let i=1; i<=props.page+additionalPages; i++){
                pages.push(<Page key={i} onClick={(e)=>props.choosePage(e)} style={props.page===i ? {color:'#e6001f', textDecoration:'underline'} : {color:'#0424D9'}}>{i}</Page>)
                setPageList(pages)
            }
        }
        if(props.page < allPages){
            pages.push(<Page key='next' onClick={()=>props.nextPage()}><Next/></Page>)
        }
    } 
    if(props.page+5 <= allPages){
        renderPages(5)
    } else{
        renderPages(allPages-props.page)
    }
    
    }, [props.page, allPages])

    return(
        <PagesComponent>
                    <PagesUl>
                        {pageList}
                    </PagesUl>
                    <PagePop type="number" min='1' max={allPages} showMultiple={showMultiple} onKeyPress={(e) => props.changePage(e)}/>
        </PagesComponent>
    )
}
export default Pages

