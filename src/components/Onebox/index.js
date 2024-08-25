import { Component } from "react";
import axios from "axios";
import './index.css';

class Onebox extends Component {
    state = {
        threads: [],
        selectedThread: [],
        isLoading: true,
        error: null
    };
    componentDidMount() {
        this.fetchThreads();
    }

    fetchThreads = async () => {
        const token = localStorage.getItem("jwtToken");
        try {
            const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.setState({
                threads: response.data.data,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error: error.message,
                isLoading: false
            });
        }
    };

    handleThreadClick = async (threadId) => {
        const token = localStorage.getItem("jwtToken");
        try {
            const response = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.setState({
                selectedThread: response.data.data
            });
        } catch (error) {
            this.setState({
                error: error.message
            });
        }
    };

    handleDeleteThread = async (threadId) => {
        const token = localStorage.getItem("jwtToken");
        try {
            await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.setState(prevState => ({
                threads: prevState.threads.filter(thread => thread.threadId !== threadId),
                selectedThread: null
            }));
        } catch (error) {
            this.setState({
                error: error.message
            });
        }
    };


    render() {
        const {threads,isLoading,error,selectedThread} = this.state
        console.log(selectedThread)
        return (
            <div className="onebox-container">
                <div className="sidebar">
                    <img 
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWgVb0BxlAktk4Swa-8WeLhOjtyN5yegvfovPFLJXbrAqyFG6D5zsXiVxbAyUO71_su-yIo7IKRbA3pyi_bzcfyp-dT7Rc-6XOEffXmwcKSJR4K_mAGQwtZsaupcBmTxYFl8UyscS1zCSwY1Zf0-r8btUl1Kc_hHErbuIPbapKxupyhyphenhyphenUq_T11njxG/s320/Logo%2012.png" 
                        alt="sidebar-logo"
                        className="sidebar-logo"
                    />
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu5SAoAq7sUqpAwl0TYeYHfZBJuJyU1MNp5OzkgGUDd2Q_4sKmCxlfoqbWg7VdE3VxtSA1A2vXnfKrUNmSnmQIP8lvHzqvNFENmetYTkKknsYBzZp58LNd2O737_xK5UYnIJXt3o6CEcGj3f5_RMGZV9fLvGfl3hgQ76bEv31KProewWcThZpowP7F/s320/Home.png" 
                                alt="Home"
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisxeQXIES96c7qKzaVwF_gzcgTZlA81_HTzemhIxm-lk_FTHUojphv25zlxb8-2sHml73hC06d0fxYLJu_rN-cFfot8G4XZBHc-SdxI-NK_21WCuE0_t3WS1BDMD5X2wLWMlEW_Ekc1KpvzRxxwuGCvM0W0ehdvx35Po-2Y29tUt4YkThIboRdVg_2/s320/email.png" 
                                alt="find" 
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6igaYS5F9hIsYWSN0y_hczxPceZsUU5lumniKCGmCFo7mEmMUarHFzitljHgPfqGYw7LwyI4d3BBtw2ftaFnp7hxHv-l_K_9MOhbOL9JLCpRQ9COBOCcHn3_Dqy22wHWo65INOQDSla-q-cB1Z_9CxjSeW3ASvmGGA5nBiJLnmPXcapVQBVq5GDC/s320/email%20%281%29.png" 
                                alt="email"
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhol4W9IjAwXL_jPBSiBdhdN2a-y3-XYDJ2oOCZbHy5pd7Q0G3J8IdXMPI9Cojka9Qz_Ltj0x0Jx-E2VlPmtXhcqzpicvTtjYGZWVtwo76LXYesi9P9bukPafyEUVjA_ySobVHLqJFeATdOeOHWqRX6AHTfYJzFFW7U-74MzZaanFif0j6YWA36mvUv/s320/Frame%2023.png" 
                                alt="send"
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMY7Sr-ZJv5dx9SbxyLBnBpcLvNCQCrFHmKeDNatb697Mf-saHDV46UREtP_1S0mRlA08ulSVetgosCmq0OeHHBmFDWHHokUU1TSlGt8XA-TpgNvpSpzsLETK9GN6SpnGFqsZ2Ny94SDRVCc6PqGDuCxh0Zx1FvvM0by6Euru3ZpfZRZL5GIrBtpNh/s320/email%20%282%29.png" 
                                alt="list"
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1viUqR-4uclhvn7iJfOHWUrO7-QQJNvayleKh3ldKT-usRHcMUBqo3SExMGmUct6R2A-TjfDIg4zlEgGvTsFvQ8JxQNz1pTlr-cc8hICCnEOFN8Yp8sVdGGv-HfWWxb8BwjRTrFG-AIhp_5SJhEhEPvq06kTaf0UJPN0HlZtFuGkEU6rN0mff9sM0/s320/Frame%2019.png" 
                                alt="count"
                            />
                        </li>
                        <li className="sidebar-item">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP1g0RDlWQS2-f7k-el3Vw2847X4NnfC5u51PkBWzLgZ_PQpwqbQ1acm38yI_I26-Xvd9MnzHvh12unEkVjGrodPaApleAXWaHsqZuZ1tC_1J5pjkcNdmTVQh0yEL_oAU4R0Po6BjY9_8jSeVOmdzo-viHrVfRL8nS01JVChN4U2u8gx6C5zpTtEYx/s320/Vector.png" 
                                alt="bars" 
                            />
                        </li>
                    </ul>
                    <img 
                        className="sidebar-user-logo" 
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV21k_l7VnleCPcxi3qjU_EFTBpPntVxwuT_Z4YyAoauRfZJ1W9jZfpBfAfWCgO-I0nZJIyBtA1wRsyT2uQDbx5FtCG__gSrc9iafLXdROVr2W71SRtZcZTdZPQGvc9sa7bFEI4OKYUFF5TXeuaIwSEem75HixDrzSJssFoggwZ4IooHVepBmnGEk9/s320/user_icon.png" 
                        alt="user-icon"
                    />
                </div>

                <div className="main-content">
                    <header className="head">
                        <p>Onebox</p>
                        <div className="header-right">
                            <div className="theme-toggle">
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQGnOLJKhmpOjOIuHU7IULxuoVaPs0955bGwAUfh_chEzS-VCIl-1Kt0zx1CnigRahKJUUItBm7fvc0twFtya3-NPtX06VE_SvBGX2TSWzfgq7lAlmilxU0PLxWP3klj9jt-xyjXNqVME8g52J8odJCKD3buBXuPyuEf7vOxB8IkM7DpuivJU-F_jE/s320/Ellipse%202938.png' alt="dark" />
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWlDR3fxTYiRAzUi-YkrpPK2eUrVsDMMaNrRBqICEDCbFCo_yCEx1-fPGXWMQusx1GHECWC3bBFlsntMBjtZXYLIww-fcRAJNdDk7uDDe6qzNAPiT9jDZGRE5IpJiwMRVdaexcmdnS1D7tD3YAV8FBdCWoxC2z0n45tu-CjUYLDLBrO5rqVnij6Tfq/s320/light_mode.png" alt="light" />
                            </div>
                            <div className="workspace">
                                <p>Tim's Workspace</p>
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhkS2dNq6ddXyK_hJlykA30FMipGVoQ4nUqdFT3zu5f0RfRtYyw6Ja1PNgMwiMLAaJqax66EyR1RnZ4zETR9SMuoJeIcE7b_M7L_aU3PbIzJj12UIZDtQ3MyQSIH6Pc3ytaXHMJvPulIsMTkjiL2Q-mnoxhoItk4nKlULTtn-xG6k4d8lCDXEQNF-h/s320/arrow_back_ios.png" alt="down-arrow" />
                            </div>
                        </div>
                    </header>

                    
                    {isLoading && (
                        <div className="body-content">
                        <img 
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVvyQLeuh8SAimNlIuHCQGDNM9o0AkPCo8GMIhS4kuVbyXGCU0qTtSvDm8Zgkr4QKcUlBsrM2JQhE1JK2VwZBshHDv3LWmD__wxygUVGSU2Q72She4cohcOBD5ruwV-cJtemPDh-K-5tpf4DMMQ_e_8DCdNf482HvI1apN3jQzE45gqIkXol_yFFvB/s320/No%20Message%20illustration.png" 
                            alt="loading"
                        />
                        <h3>It’s the beginning of a legendary sales pipeline </h3>
                        <p>When you have inbound E-mails<br/> you’ll see them here</p>
                    </div>
                    )}
                    {error && (
                        <div className="error-message">
                            <p>Error: {error}</p>
                        </div>
                    )}
                    {threads.length > 0 && (
                        <div className="body-box">
                        <div className="threads-list">
                            <div className="threads-list-head">
                                <div>
                                    <h3 className="threads-list-h3">
                                        All Inbox(s) 
                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhUG7lc6d-spVKqUrvfqptMnOFY_pIoDFuvQIl_4CwBZrhvEWxeCZ8DlZDeFf7I2aob03r0Ogch-jWe7foDAS9fPi_bH-j-5DceHfmUOhkCmxf6kfVpcu19Qnn5sd1RuRahMMLivtboraY7YFJHzSqBYjUNUDUUl_keNauJ8UKr6PtiCzeSZaaAOS9/s320/Frame%2025.png" alt="down-arrow" />
                                    </h3>  
                                    <p>25/25 <span className="threads-list-span">Inboxes selected</span></p>
                                </div>
                                <div className="threads-list-refresh">
                                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiFJioG-1PZ4EcexvuUOiTkz6PyFvvPSvniiB1JlTt10zIL1jLpkgb3GuPBWWxD7s5IYAMivMucOILGj6Dh-81opfh3amHZz-8G3e0KhqXOtUxgkjpQ5tb-tx-UEaPKfzeY9HTj0R9zDpapTyEhe7hyphenhyphenM3bjJcfFwEyOmDZqpxR-8gVNVzdWXwiBxgn/s320/refresh.png" alt="refresh" />
                                </div>
                            </div>
                            
                            <div>
                            <div className="search-container">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjScGlVhBc5yKJ1kWeSQjksuEAxhEyW4E4eOhHczjgNO_1MGxqgcfzUMbZKZbyiOOih1Q5YOTdLn5i8Tw9xSsRuqlyKosD65tYLWWo-wAePF-zlPfzplEFQlmPKCHLFtCetpAzwSrg5pQaVQEOL2N40BZYyHb51EuIB94rHW5KFWinH2egJIQW5T9Av/s320/Search-s.png" alt="search-icon" className="search-icon" />
                            <input type="search" placeholder="Search" className="threads-list-search" />
                            </div>
                            <div className="third-box">
                                <div><p><span className="third-box-span">26</span> New Replies</p></div>
                                <div className="third-box-div"><p>Newest</p><img className="third-box-div-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhkS2dNq6ddXyK_hJlykA30FMipGVoQ4nUqdFT3zu5f0RfRtYyw6Ja1PNgMwiMLAaJqax66EyR1RnZ4zETR9SMuoJeIcE7b_M7L_aU3PbIzJj12UIZDtQ3MyQSIH6Pc3ytaXHMJvPulIsMTkjiL2Q-mnoxhoItk4nKlULTtn-xG6k4d8lCDXEQNF-h/s320/arrow_back_ios.png" alt="down-arrow" />
                                </div>
                                </div>
   
                            </div>
                            <div>
                            {threads.map(thread => (
                                    <div key={thread.threadId} className="thread-item" onClick={() => this.handleThreadClick(thread.threadId)}>
                                        <h3 className="thread-item-h3">{thread.fromEmail}</h3>
                                        <p>{thread.sentAt}</p>
                                        <p>{thread.subject}</p>
                                        <div className="thread-item-div">
                                        <p className="thread-item-p"> Interested</p>
                                        <p className="thread-item-p-one"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcVH0V4Anciyjja0aEBQ_oS51Y9ILLNawJ1sbc5ne0CDnQi4GFtBGdSkGyk0T5vhAKjNp6iCo5JZnMEPuqmv105jbiOqvjxqC9JWPJS60ycF-jTsA9cUfhs-RQHjFj9NjAH3KOBpttBs-mMqc9-hPWPl5nfePogaGupaA3yGQ8KEjDfqRuaWREHKBi/s320/%F4%80%88%A0.png" alt="sender"/> Campaign Name</p>
                                          </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="middle-one">
                            <div className="middle-one-box">
                                <div>
                                    <h4>Orlando</h4>
                                    <p className="middle-one-box-p">orladom@gmail.com</p>
                                    </div>
                                <div className="middle-one-inner-box">
                                    <p className="middle-one-inner-box-p">Meeting Completed <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhkS2dNq6ddXyK_hJlykA30FMipGVoQ4nUqdFT3zu5f0RfRtYyw6Ja1PNgMwiMLAaJqax66EyR1RnZ4zETR9SMuoJeIcE7b_M7L_aU3PbIzJj12UIZDtQ3MyQSIH6Pc3ytaXHMJvPulIsMTkjiL2Q-mnoxhoItk4nKlULTtn-xG6k4d8lCDXEQNF-h/s320/arrow_back_ios.png" alt="down-arrow" />
                                    </p>
                                    <p className="middle-one-inner-box-move">Move <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhkS2dNq6ddXyK_hJlykA30FMipGVoQ4nUqdFT3zu5f0RfRtYyw6Ja1PNgMwiMLAaJqax66EyR1RnZ4zETR9SMuoJeIcE7b_M7L_aU3PbIzJj12UIZDtQ3MyQSIH6Pc3ytaXHMJvPulIsMTkjiL2Q-mnoxhoItk4nKlULTtn-xG6k4d8lCDXEQNF-h/s320/arrow_back_ios.png" alt="down-arrow" />
                                    </p>
                                    <div className="middle-one-inner-box-div ">
                                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6aD37SVk91E_JGO43EuDqZc1q2QgbLJDuPgdA8lzajZI6TmvXooIJgUAecqkq3aIMy4tdtyOmQnp-UPZ0YRUtbM0E4SeLNrW9qG1bDbv-pAPaZvsWwgimL2gtfylbbtn4qrDth9Nxi6jzZS5r0vfITerpsppSnKlNeUCgxn8zMSuPYI1xfwvBCGCU/s320/more_horiz.png" alt="down-arrow" />
                            
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="for-today">
                                    <p>Today</p>
                                    </div>
                                    <div>
                                    {selectedThread.map(thread => (
                                    <div key={thread.threadId} className="thread-item" onClick={() => this.handleThreadClick(thread.threadId)}>
                                        <p>{thread.subject}</p>
                                        <p>from : {thread.fromEmail}</p>
                                        <p>cc: {thread.cc}</p>
                                        <p>bcc: {thread.bcc}</p>
                                        <p>to: {thread.toEmail}</p>
                                        <p>{thread.sentAt}</p>
                                            <div dangerouslySetInnerHTML={{ __html: thread.body }} />
                                            
                                    </div>
                                ))}
                                <button className="body-box-button">Reply</button>
                                        </div>

</div>
                                <div>
                                    <h1 className="last-one-h1">Lead Details</h1>
                                    <div>
                                        <div className="last-one-box">
                                            <p>Name</p>
                                            <p>Orlando</p>
                                            </div>
                                            <div className="last-one-box">
                                            <p>Contact No</p>
                                            <p>+54-9062827869</p>
                                            </div>
                                            <div className="last-one-box">
                                            <p>Email ID</p>
                                            <p>orlando@gmail.com</p>
                                            </div>
                                            <div className="last-one-box">
                                            <p>Linkedin</p>
                                            <p>linkedin.com/in/timvadde/</p>
                                            </div>
                                            <div className="last-one-box">
                                            <p>Company Name</p>
                                            <p>Reachinbox</p>
                                            </div>

                                    </div>
                                    <h1 className="last-one-h1">Activities</h1>
                                    </div>
                        </div>
                    )}

                   
                </div>
                    
                </div>
        
        );
    }
}

export default Onebox;
