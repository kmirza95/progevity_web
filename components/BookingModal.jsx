'use client';
import { useEffect, useRef, useState } from 'react';

const URLS = {
  signup: 'https://progevity.clientsecure.me/',
  signin: 'https://progevity.clientsecure.me/sign-in',
  practitioner: 'https://account.simplepractice.com/saml/auth?SAMLRequest=fVLLbtswEPwV3XiS9bDi1oRlwLVR1EDaCrbaQy4BTW0aAhLJcpeN%2B%2Fcl%2FUhVIPWJAHdmODPcBYqht3zl6Vnv4KcHpGSFCI6U0Wuj0Q%2Fg9uB%2BKQnfdvc1eyayyLMMQXoHE1SD7cE6ISkgJtIMmQ9szKJuJoIsSzZBVGkRFf%2FyhZTGa3pLYETdbmr2KDo5L3NxSN8dijytCijS91OYpZWAeVlOZ8VhfhegiB62GkloqlmZl1WaV2k5a4spLyte3T2wpHGGjDT9B6U7pX%2FUzDvNjUCFXIsBkJPk%2B9Xne15Ocn44g5B%2Fatsmbb7uW5Z8D9FOMQKAJceh18ij3dtK4lromGJvc%2BzFKlsuIpqf4rnlv3WlwtpFNp4vzv%2F5JehtN43plfydrPrevKwdCIKakfPAko%2FGDYJuO4g3qkufTlBOTmhUoIll10cu%2BwLdaXvCshAcKVmbwQqnMLYEx%2BDzmmCMWvehkx08LW%2FWJrmMuHDdhOPFuC5%2BIMjwZBvtWOPoEv9N8fPsP0Zfp%2BPdX%2F4B'
};

export default function BookingModal({ open, onClose }){
  const [iframeAllowed, setIframeAllowed] = useState(true);
  const iframeRef = useRef(null);

  useEffect(()=>{
    if(!open || !iframeRef.current) return;
    const t = setTimeout(()=>{
      try{
        if(!iframeRef.current?.contentDocument){ setIframeAllowed(false); }
      }catch{ setIframeAllowed(false); }
    }, 1200);
    return ()=>clearTimeout(t);
  }, [open]);

  if(!open) return null;

  return (
    <div style={backdrop()} role="dialog" aria-modal>
      <div style={modalBox()}>
        <div style={modalHeader()}>
          <strong>Create your Client Portal account</strong>
          <button onClick={onClose} aria-label="Close" style={closeBtn()}>✕</button>
        </div>
        <div style={{position:'relative', height:'70vh'}}>
          {iframeAllowed ? (
            <iframe ref={iframeRef} title="SimplePractice — Progevity Signup" src={URLS.signup} style={{width:'100%', height:'100%', border:0}} />
          ) : (
            <div style={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:24,textAlign:'center',color:'#444'}}>
              <p>Your browser or SimplePractice may block embedding for security. Open the Client Portal in a new tab to continue.</p>
              <a href={URLS.signup} target="_blank" rel="noopener noreferrer" style={primaryBtn()}>Open Client Portal</a>
            </div>
          )}
        </div>
        <div style={modalFooter()}>
          <span style={{color:'#555',fontSize:12}}>Trouble? Use the direct link:&nbsp;
            <a href={URLS.signup} target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline'}}>progevity.clientsecure.me</a>
          </span>
          <a href={URLS.signin} target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline',fontSize:12}}>Existing patient sign in</a>
        </div>
      </div>
    </div>
  );
}

function backdrop(){return {position:'fixed',inset:0,background:'rgba(0,0,0,.5)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:50};}
function modalBox(){return {width:'100%',maxWidth:800,borderRadius:16,background:'#fff',boxShadow:'0 10px 30px rgba(0,0,0,.15)',overflow:'hidden'};}
function modalHeader(){return {display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee'};}
function modalFooter(){return {display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 16px',borderTop:'1px solid #eee'};}
function closeBtn(){return {border:'none',background:'transparent',padding:6,borderRadius:8,cursor:'pointer'};}
function primaryBtn(){return {display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'10px 14px',borderRadius:12,fontWeight:600,textDecoration:'none',color:'#fff',background:'#0B0B0C'};}
