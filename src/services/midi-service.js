import { SECURE_CONFIG } from '@/config/secure-config';
import { APP_CONFIG } from '@/config/app-config';

// Safe fallback config with all your MIDI links for the "House" genre
const safeConfig = SECURE_CONFIG?.midiLinks
  ? SECURE_CONFIG
  : {
      midiLinks: {
        "House": {
          "A Major - F# Minor": [
            "https://www.dropbox.com/scl/fi/7y7ttwrzf1pkz4xy2keyv/midi1.mid?rlkey=hy5cbfea5ioolvmh5bkmp7gdh&st=7hgi3j2f&dl=1",
            "https://www.dropbox.com/scl/fi/koxsvx510yr6yc79aw1zy/midi2.mid?rlkey=nguo29cwrunkwvn7lmnrhrlre&st=o7gqf82d&dl=1",
            "https://www.dropbox.com/scl/fi/t50p6913w8eqljjvb3v34/midi4.mid?rlkey=106nsg23bwl5uyjqzkx1fmrn9&st=bilb6c9r&dl=1",
            "https://www.dropbox.com/scl/fi/vykxs9v8dgzd55n7kqpsz/midi5.mid?rlkey=h9z6bw0muzozw9q9mwu4cotql&st=1iiopjci&dl=1",
            "https://www.dropbox.com/scl/fi/1q53v0fqzr4ptx6ap4zy3/midi6.mid?rlkey=1vm9n8iaakkgqjna63kx0c2ex&st=dz3gsl4p&dl=1",
            "https://www.dropbox.com/scl/fi/u40f40ga7xfz4teq6ki6c/midi7.mid?rlkey=rp9ggl7h3gzmzjpcascznf95e&st=778s6mas&dl=1",
            "https://www.dropbox.com/scl/fi/tddoqfjbidr4hi1kg2rff/midi8.mid?rlkey=n01w5e7mul8x8lenah7mjmrgg&st=vg25nx6e&dl=1",
            "https://www.dropbox.com/scl/fi/4ks7nn807mon7ni63h9kj/midi9.mid?rlkey=wem9p42r4kh09rfb6hs5ifrrr&st=40hvgdby&dl=1",
            "https://www.dropbox.com/scl/fi/iy665n6jtnhl5zzzsdkn4/midi10.mid?rlkey=4sc5mmi6s70nmoalbo23jzdfe&st=j7beb8dd&dl=1",
            "https://www.dropbox.com/scl/fi/ad9tquig98j8xhyg4c1so/midi11.mid?rlkey=qqtwtfb7qhuqzo1d359kipm4w&st=w9d8w050&dl=1",
            "https://www.dropbox.com/scl/fi/bbf4ra9vf0xorasbprn66/midi3.mid?rlkey=6z1hf86dj1x6e043gf4xatkgd&st=ictipub7&dl=1"
          ],
          "Ab Major - F Minor": [
            "https://www.dropbox.com/scl/fi/j0xzfuijmhqe5lxjdi29z/midi1.mid?rlkey=8d4bvzncxep0khv3yvkjs6x8f&st=5oivx5nv&dl=1",
            "https://www.dropbox.com/scl/fi/65id5r4lf7kiy2rlmasrg/midi2.mid?rlkey=uhzenh8eazzansgdfmwbb3qzd&st=edhfsouy&dl=1",
            "https://www.dropbox.com/scl/fi/xrejyp9kb2y1xwo86jmxp/midi3.mid?rlkey=z9eh9h6x4ecuua45eolaee8kh&st=azlsy9vr&dl=1",
            "https://www.dropbox.com/scl/fi/6una2jr4dizdas5r6ixil/midi4.mid?rlkey=5i3wbnyqce41vcs89rm15axz1&st=jn0od4zx&dl=1",
            "https://www.dropbox.com/scl/fi/dbxef9t7x1yqoq9en8dto/midi5.mid?rlkey=9a5q70iqu84ltrway8u9r45zq&st=88eo7gw2&dl=1",
            "https://www.dropbox.com/scl/fi/f93ttskgmi9nk9isie1zy/midi6.mid?rlkey=o9emsxl41ldl2hlnima4w119g&st=ft3c6buc&dl=1",
            "https://www.dropbox.com/scl/fi/ycwyin30m183qxyixgdpo/midi7.mid?rlkey=semx06mvbzkexeat89ec4q42v&st=ufx0uajp&dl=1",
            "https://www.dropbox.com/scl/fi/qh8jfe5b05i0qwpgglf9d/midi8.mid?rlkey=o8dr8nqwlso7hn03re2b9qge0&st=npv7f7u1&dl=1",
            "https://www.dropbox.com/scl/fi/rba76zh59or51a82g9v0j/midi9.mid?rlkey=bive5qlwq0vb8bpmri7l1i7ef&st=7cnuyxk5&dl=1",
            "https://www.dropbox.com/scl/fi/m61vl85066psx8ii394qf/midi10.mid?rlkey=odqgwr310ftp360bh7nou6lwy&st=cw9jim9q&dl=1",
            "https://www.dropbox.com/scl/fi/58pwvfqk25huib3ltjwem/midi12.mid?rlkey=89j5xq1xn6s79q5879yjz07mb&st=i6j30qid&dl=1",
            "https://www.dropbox.com/scl/fi/x7ye44xz19erisr5g9icu/midi13.mid?rlkey=m75ega134oui73govkn4u1ipp&st=dpewg0rc&dl=1",
            "https://www.dropbox.com/scl/fi/i3jkurrb2tkxt0g5sehl0/midi11.mid?rlkey=f9wq99vsy30yr98lop38k9q24&st=mjmw2gfg&dl=1"
          ],
          "B Major - G# Minor": [
            "https://www.dropbox.com/scl/fi/3qyr8mhe1d730zp0cfnsh/mid1.mid?rlkey=o5f9bp2l8ezv7znre5g8k42ug&st=26lnjv4x&dl=1",
            "https://www.dropbox.com/scl/fi/5gm9dqk9ptpyeg6p6dnhx/mid2.mid?rlkey=6m0cfgx2x9tmvkhttdmx824nr&st=gng1gwnq&dl=1",
            "https://www.dropbox.com/scl/fi/ml6c4u8cyz9m4psbobc5w/mid3.mid?rlkey=6do03ygqfmvsjfb08qkbkx39u&st=fs6rwacp&dl=1",
            "https://www.dropbox.com/scl/fi/emo9aycazo0pd5tx6enij/mid4.mid?rlkey=pfibeun957vmbtdj3mo8zv20e&st=q0m5xi6g&dl=1",
            "https://www.dropbox.com/scl/fi/7tuq29cy1svmdmnhqearb/mid5.mid?rlkey=cype8q463hic1wq9cov6wj4is&st=uvz31jll&dl=1",
            "https://www.dropbox.com/scl/fi/j2arxkxbizy8031s5hjc5/mid6.mid?rlkey=yzq1n6f6p9rr4ec881kydxv98&st=7tpfotzx&dl=1",
            "https://www.dropbox.com/scl/fi/thchejfo6o8fdvm56g2ls/mid7.mid?rlkey=0a0t4je2kogdt11h2kstk8xi6&st=yo5ib8wi&dl=1",
            "https://www.dropbox.com/scl/fi/bfmvtsuw79je7t514xf3q/mid8.mid?rlkey=j53o68l663qszxx6lodk5le4f&st=no8qvvkc&dl=1",
            "https://www.dropbox.com/scl/fi/4ho2ihxp8j2jfrv7h763x/mid9.mid?rlkey=jjfb6bobn565y9ljzs06xzu3i&st=u8dp67q8&dl=1",
            "https://www.dropbox.com/scl/fi/hipyalk7xi9juiroowjwi/mid10.mid?rlkey=kn0i8zwhz4cuqq5upz38hol0e&st=fkbu0bqu&dl=1",
            "https://www.dropbox.com/scl/fi/6yblwspw8pae2yl30gemi/mid11.mid?rlkey=am4yqjdie3hg5ulvbmzxb3d3f&st=jq6wj0hh&dl=1",
            "https://www.dropbox.com/scl/fi/af93hxczar7u5mg5mgwqp/mid12.mid?rlkey=ug356sr69crg3u8nt0gpdazz5&st=na5zo7cu&dl=1"
          ],
          "Bb Major - G Minor": [
            "https://www.dropbox.com/scl/fi/ffbu53bkoot641l5cd3t5/mid1.mid?rlkey=cpd5vxf83sgwgbxn963ivctlw&st=9dumsxhz&dl=1",
            "https://www.dropbox.com/scl/fi/z3j6xrvo4r3z6xkvb4dng/mid2.mid?rlkey=s3rlxzyad0e7wwpmxdsf7d1ae&st=4ddid6j3&dl=1",
            "https://www.dropbox.com/scl/fi/ctwf6k7g2m5i46fdg0z79/mid3.mid?rlkey=c8q430dwwrdwqirzih46qe1wo&st=h69w8u43&dl=1",
            "https://www.dropbox.com/scl/fi/2ldl0rqh4ft5qlrq542rr/mid4.mid?rlkey=5avnhpvb50wzz0piuddxrdx8a&st=8rua6uk1&dl=1",
            "https://www.dropbox.com/scl/fi/x8arhzefkjio7q26g5kvx/mid5.mid?rlkey=dfa8kxau9cxifu47gq40iex77&st=himmqm03&dl=1",
            "https://www.dropbox.com/scl/fi/avar127es5n1ljfx1371s/mid6.mid?rlkey=7xiv2g9e9xbmkxkb0zcin8ftb&st=mgxyqpwr&dl=1",
            "https://www.dropbox.com/scl/fi/6yostp7it2fwby9impsku/mid7.mid?rlkey=5b98x2ybi0g8tpxxz1jwnj4jd&st=bp33jvd0&dl=1",
            "https://www.dropbox.com/scl/fi/lpqm149g1cylr6wvxpnwu/mid8.mid?rlkey=p7ea04z9cobika7h5r82o3wbf&st=x0lpg3et&dl=1",
            "https://www.dropbox.com/scl/fi/z70rx22nq9o1626172ryy/mid9.mid?rlkey=ibwqi5502nq7p5nb3lp4wxfyf&st=3szl75jy&dl=1",
            "https://www.dropbox.com/scl/fi/lh1uep0r4gvv9a93zm4sj/mid10.mid?rlkey=p9utrvhkm7u7cj885vunhjnad&st=m326fmix&dl=1",
            "https://www.dropbox.com/scl/fi/l0zfr1i9qggz307249tgq/mid11.mid?rlkey=z5vx9toyq53qdy48hsmffnfp0&st=82nu28t9&dl=1",
            "https://www.dropbox.com/scl/fi/26nli18nfg2jor2wvqvfm/midi13.mid?rlkey=u0n75yow3inq7hl6e8y3ntpa2&st=lmmeqezy&dl=1",
            "https://www.dropbox.com/scl/fi/3ul4u7bcav0dfkilg7pll/mid12.mid?rlkey=zh90uynv41kyjguck2r9i45xj&st=69sz36mx&dl=1"
          ],
          "C Major - A Minor": [
            "https://www.dropbox.com/scl/fi/g5660hw1hjwcntezmn6zp/midi1.mid?rlkey=88dhdeqj5mc331owcd7hsjfb4&st=jzrfaye3&dl=1",
            "https://www.dropbox.com/scl/fi/rn43gfoasans56rdtprre/midi2.mid?rlkey=93mt4ji4euzcivnbevp6ycf7x&st=302r0a04&dl=1",
            "https://www.dropbox.com/scl/fi/2u6d92hc1cfjm9qr329do/midi3.mid?rlkey=lmpmir0od6gjnm14fmrlc3snm&st=9mj0wgrr&dl=1",
            "https://www.dropbox.com/scl/fi/qmgaongvtg7d7puk141wu/midi4.mid?rlkey=4u7105y4gyr20qzh33h1yom7f&st=g8uhetf4&dl=1",
            "https://www.dropbox.com/scl/fi/a5n8vfdxhq4f0zqted24n/midi5.mid?rlkey=4a5skgeb08e7riq9alc65tw5i&st=ikqvzff7&dl=1",
            "https://www.dropbox.com/scl/fi/7gn8fpl4nkau5b5p4wjvb/midi6.mid?rlkey=hzfqys1ej9nqumavdpcf9itfz&st=aqddrf8q&dl=1",
            "https://www.dropbox.com/scl/fi/dv3m8nekb2zdk0d3vy4qf/midi7.mid?rlkey=0webtxjj5arue2ew4c1v8t62t&st=1n18gp8m&dl=1",
            "https://www.dropbox.com/scl/fi/s295zllkmpt71mbyqfmwp/midi8.mid?rlkey=hd2nw6cw97a7krs4jdfszg82m&st=8xaxzc9g&dl=1",
            "https://www.dropbox.com/scl/fi/cevubsp66jaz649mbtzsy/midi9.mid?rlkey=7ifvpco01s576ht1zm783lbxo&st=sdd2m1d7&dl=1",
            "https://www.dropbox.com/scl/fi/zgpsxvkel0yfl2flcf3rq/midi10.mid?rlkey=4sc7a0rjj1j9o8sap7mtjxdfr&st=lnzpatos&dl=1",
            "https://www.dropbox.com/scl/fi/45d847cpxcmndpmw7swja/midi11.mid?rlkey=otoi0lebaazrtuevuk8ehh3vg&st=6yy0eg8l&dl=1",
            "https://www.dropbox.com/scl/fi/x3zy8b2debbre000z5hwx/midi12.mid?rlkey=b9vvul3nna62nf52ckp46ebx2&st=q233yhbd&dl=1"
          ],
          "D Major - B Minor": [
            "https://www.dropbox.com/scl/fi/lmok18c3xhwd2ds38b2gx/midi1.mid?rlkey=x4n85y0ng4kj8g6nzpztonbha&st=pkeeywz9&dl=1",
            "https://www.dropbox.com/scl/fi/t57zkm99c74f4ipsapnur/midi2.mid?rlkey=wjf8mopmkllrxzcpu0vs6r8do&st=6v16f45b&dl=1",
            "https://www.dropbox.com/scl/fi/ge1gc9d0tfc927y598gu1/midi3.mid?rlkey=9c2hm9z8txi3rxh2tr4extsig&st=0gj0j45a&dl=1",
            "https://www.dropbox.com/scl/fi/tv293tenyf4c800xv2h63/midi4.mid?rlkey=7joguroy9xekbg4r9l6z40oxb&st=ac7065fr&dl=1",
            "https://www.dropbox.com/scl/fi/0ugob6e197fe3qnrj3jfe/midi5.mid?rlkey=wuz268f041h6gq86gqqf5kmmj&st=wdgd87wu&dl=1",
            "https://www.dropbox.com/scl/fi/c6y5p5479iblj4ssko0pj/midi6.mid?rlkey=4fjghs3oe9eh0sdoj6kz2m8vv&st=34omhrah&dl=1",
            "https://www.dropbox.com/scl/fi/f5tibvcvwx016vyzvgkhb/midi7.mid?rlkey=g3gsz180ohjz0li3upsfq3j75&st=x9tpi7l2&dl=1",
            "https://www.dropbox.com/scl/fi/tr1vvbo94w3te6a1l2qyk/midi8.mid?rlkey=nnw4j1xmumucthbma6jy1y63m&st=kaq7u7ol&dl=1",
            "https://www.dropbox.com/scl/fi/lofwzi8lhncp83b793oim/midi9.mid?rlkey=kdgcelnvzs1z3kiaugnpio2kl&st=mhread0l&dl=1",
            "https://www.dropbox.com/scl/fi/h8rnla7ms2gocn8uvj2ci/midi10.mid?rlkey=p2vr7imfqrcpk0lil1u4hc5v9&st=dr2tpbbl&dl=1",
            "https://www.dropbox.com/scl/fi/ie98k43s0mfgsn58n7ss9/midi11.mid?rlkey=uhyvxnsv3hfpv20y35kkhrsbz&st=zjgofa0k&dl=1",
            "https://www.dropbox.com/scl/fi/aioa4rjeian94e8wc8twi/midi12.mid?rlkey=1mkkqqia018u4fj7dm0xbe0mp&st=vxdcfu2x&dl=1"
          ],
          "Db Major - Bb Minor": [
            "https://www.dropbox.com/scl/fi/rjg5qftuj8q4pgkkmotmr/midi1.mid?rlkey=ebusrkevi3gvv66sii5fkzwx7&st=ny78pom2&dl=1",
            "https://www.dropbox.com/scl/fi/ipue94kjkipha5gvz0bk7/midi2.mid?rlkey=x7a93711cuflkgeioxx4qmqoj&st=oid4u7rz&dl=1",
            "https://www.dropbox.com/scl/fi/x1pmb2lvuw0ahz0d1e1d3/midi3.mid?rlkey=mmqwc25nwz46fzq90xtfrznw0&st=vkmdyv08&dl=1",
            "https://www.dropbox.com/scl/fi/eij37buteoa0u9ulp0tbs/midi4.mid?rlkey=bievtbjzwobblo8c5i6h3p0rw&st=xmaoi2h6&dl=1",
            "https://www.dropbox.com/scl/fi/915rvwqq90k3z4vfwrga2/midi5.mid?rlkey=1zztuiuufo7u48athd1vufglr&st=4wpd4b3p&dl=1",
            "https://www.dropbox.com/scl/fi/b3vuz5oa35j9k3u6lcx5e/midi6.mid?rlkey=4q7wyjl3ddrxs9dwfcezqwppy&st=misscfnk&dl=1",
            "https://www.dropbox.com/scl/fi/qjo10p17z2spvqcp8qt8r/midi7.mid?rlkey=9ti08ug9pgbyf69nbqfefdt28&st=ju8dd69x&dl=1",
            "https://www.dropbox.com/scl/fi/es1hkvt0lvlgyri0tn4a0/midi8.mid?rlkey=mlxn1fljkan4pwhjnje1fyzgz&st=0nqwi2ka&dl=1",
            "https://www.dropbox.com/scl/fi/q9nmpu0chx1kozls9sabm/midi9.mid?rlkey=e6ju4yswlznq113xzp8wkj1ov&st=7l1vpzqz&dl=1",
            "https://www.dropbox.com/scl/fi/lcvqxol5twmsrxo7g6hkc/midi10.mid?rlkey=sok0e911ysxzf4e8cswh5u36b&st=77cfrk4f&dl=1",
            "https://www.dropbox.com/scl/fi/yd2pj0zhytvup4x1ltbhq/midi11.mid?rlkey=6syge682v7ol8ckzbluapo372&st=no3pc1zk&dl=1",
            "https://www.dropbox.com/scl/fi/vl92hd39mkozrck2fovaw/midi12.mid?rlkey=xbcw0dicyeklbzv3mb8kwwgyz&st=03loe41v&dl=1"
          ],
          "E Major - C# Minor": [
            "https://www.dropbox.com/scl/fi/71b98xq44w6pwd7h5jasz/midi1.mid?rlkey=lu7bkdmi1aqim91u78ntloivq&st=fm19qx4o&dl=1",
            "https://www.dropbox.com/scl/fi/szj851znl7lnhfno6zn6c/midi2.mid?rlkey=qyfbhppomh2suudpqgzqn6a76&st=g0j9z7dk&dl=1",
            "https://www.dropbox.com/scl/fi/3zsuot6ef02oym1qp89oq/midi3.mid?rlkey=wpgzmw9pc5nm09u8yzx9czl4f&st=0p0lrs7e&dl=1",
            "https://www.dropbox.com/scl/fi/ycib2t3k74f596badztzh/midi4.mid?rlkey=kqmcuao2kls5mh8glx6lvep44&st=jwupuina&dl=1",
            "https://www.dropbox.com/scl/fi/m5tkzb1wggja7tolzklan/midi5.mid?rlkey=wyw1g9ahtiw4p8v6zv3purcuk&st=gspeqkt2&dl=1",
            "https://www.dropbox.com/scl/fi/uq7ms5dgzb63lqa1uasvw/midi6.mid?rlkey=vctlgvs8z3uhj4s9zjmceleq2&st=oq2320hy&dl=1",
            "https://www.dropbox.com/scl/fi/srzkd5we1rqdn07ptrxlz/midi7.mid?rlkey=mfujxh9ntryaecl80jvn4s5ob&st=u98hthba&dl=1",
            "https://www.dropbox.com/scl/fi/wder1bfi9qeudp028cd83/midi8.mid?rlkey=fqaccq7kmqks34ekbcfjp2k69&st=oe8hg4ov&dl=1",
            "https://www.dropbox.com/scl/fi/gxz3uzgnlkgpnfd06jv7h/midi9.mid?rlkey=hr2lipzyosjwfko5zef1ufvlw&st=u870abja&dl=1",
            "https://www.dropbox.com/scl/fi/yuh61dxhvi48udys8e4fg/midi10.mid?rlkey=5ger2zqerkrd8rrospit7hny2&st=pr9lxpal&dl=1",
            "https://www.dropbox.com/scl/fi/j0yfu204s62tls2x3rn05/midi11.mid?rlkey=vchfy4ydgeq8bqjuifglnxcxa&st=ohchedqg&dl=1",
            "https://www.dropbox.com/scl/fi/qhvomvfurbb7saarig8pk/midi12.mid?rlkey=0l5j9rin9a9hw79lhk8n8x0di&st=ulfxlqqz&dl=1"
          ],
          "Eb Major - C Minor": [
            "https://www.dropbox.com/scl/fi/kjbu1r6o3wcvz43ryhsh8/midi1.mid?rlkey=g30vljm70wj166ivh9xthdu8m&st=a7pq8vb4&dl=1",
            "https://www.dropbox.com/scl/fi/f5fhn6lq3vfwyki0cxfxh/midi2.mid?rlkey=4mnnd3evigw2h1fadilnsqaxk&st=51m0ke09&dl=1",
            "https://www.dropbox.com/scl/fi/tk8wgzul2awgelj6tn27x/midi3.mid?rlkey=6vnohos0oqfdq3o5ahxphuprb&st=rfrmogyz&dl=1",
            "https://www.dropbox.com/scl/fi/lxbq8ib7w62tf10ohbvln/midi4.mid?rlkey=eefv1ake5hn9uipj0emqu6gf8&st=5kcfbav4&dl=1",
            "https://www.dropbox.com/scl/fi/2zixbjwabyjfkboalxyem/midi5.mid?rlkey=xsc7bzlax4ngm0h7xuiwm2soa&st=e36t0tra&dl=1",
            "https://www.dropbox.com/scl/fi/n83c2mxnnup6atb55hf7c/midi6.mid?rlkey=dqrzvhmbsm67q01dq2p5jkeoy&st=5135a0cc&dl=1",
            "https://www.dropbox.com/scl/fi/w2dp818qohy9n5jtu97ub/midi7.mid?rlkey=dtpaipnf8ydrphq6aqpuofrlk&st=s0d4t1qy&dl=1",
            "https://www.dropbox.com/scl/fi/44lsalqt615x4ni2hzmjz/midi8.mid?rlkey=kfqbm5xoa9zvn0zsnotxhkux6&st=nitolqy6&dl=1",
            "https://www.dropbox.com/scl/fi/xpa9fn6lcbuysczie2kbi/midi9.mid?rlkey=p7kpiaq4sxmmkzb7kj7fe832g&st=4l1e4c6g&dl=1",
            "https://www.dropbox.com/scl/fi/lrov53h73avzwul92uhos/midi10.mid?rlkey=8jnvpfgyqrdhnyxodskq9ab6b&st=9udyzgud&dl=1",
            "https://www.dropbox.com/scl/fi/0nfs00re2bcro3g1pusii/midi11.mid?rlkey=bq2p3jdr3r83ovy7j8nnbv307&st=vmztfhto&dl=1",
            "https://www.dropbox.com/scl/fi/m98rn8incs0yjzan1yfof/midi12.mid?rlkey=wgb8ioakrkd1lltu1jbnveqdy&st=bicxmn7f&dl=1"
          ],
          "F Major - D Minor": [
            "https://www.dropbox.com/scl/fi/sf09lz1kvc03aj2ko5445/midi1.mid?rlkey=lv6mqe2vqwc4tvl9gidva3dxz&st=r9xxa6gk&dl=1",
            "https://www.dropbox.com/scl/fi/8lj7klcf7kgrxp79srbxb/midi2.mid?rlkey=1rmzsxskt8qlmrpbg9p3strwu&st=35c7uegz&dl=1",
            "https://www.dropbox.com/scl/fi/ccb6ebmfia0b6ttnold9s/midi3.mid?rlkey=ax47rebbqg7agt7nx2qp5qck2&st=71a052mj&dl=1",
            "https://www.dropbox.com/scl/fi/kwxe6f86yhsjcg4i094pn/midi4.mid?rlkey=9eg3ero07haxwu40aaobbx1q5&st=f80l2eqx&dl=1",
            "https://www.dropbox.com/scl/fi/cc9t6lv1imobe73m76o8h/midi5.mid?rlkey=a1y0np921ydgkick1naogyzdn&st=vvjwg1p5&dl=1",
            "https://www.dropbox.com/scl/fi/6ytnqyz3e1b9lh76y9sgs/midi6.mid?rlkey=w14apsqp3f6b799i5mqvi3ce9&st=r3rtqzl2&dl=1",
            "https://www.dropbox.com/scl/fi/n9mnkxrwuues2qyyny5kr/midi7.mid?rlkey=sg2w5bcbbn1jax43wu9ajqceh&st=k6tnaoa6&dl=1",
            "https://www.dropbox.com/scl/fi/ki1bzaudreqog6xiiahhv/midi8.mid?rlkey=f4c2lbidlw3d52eyhen1o9ctg&st=2ednd1ip&dl=1",
            "https://www.dropbox.com/scl/fi/ftd25j12xlrv6pu3p2atf/midi9.mid?rlkey=1xmgo08pj6wf7qj6gractoqa6&st=vu473k61&dl=1",
            "https://www.dropbox.com/scl/fi/8ozxmm259gxxe551nh7cx/midi10.mid?rlkey=iq39hfkumjhabiyer2zzuk1wf&st=pwag5eqq&dl=1",
            "https://www.dropbox.com/scl/fi/7ur9it1sn1zg6qfnkfsty/midi11.mid?rlkey=g3oe09q9eo5m1uqak4hz9dafi&st=wm7xaqg9&dl=1",
            "https://www.dropbox.com/scl/fi/imnonln4jctpsg109vcx3/midi12.mid?rlkey=kat5t9dm9w06u11wtj0r1q65w&st=69d02rby&dl=1"
          ],
          "G Major - E Minor": [
            "https://www.dropbox.com/scl/fi/2gu02wum3ro86vk3vcypf/midi1.mid?rlkey=4znoerl66dompt0l6rw5rgeoa&st=pz1v1xyt&dl=1",
            "https://www.dropbox.com/scl/fi/ozjyl1i8rik5mhj9d5m9u/midi2.mid?rlkey=hbunm2qw0yant9jwslwws6sx8&st=gnsihtcz&dl=1",
            "https://www.dropbox.com/scl/fi/zfcdu5jccrm8eh1u7e3bc/midi3.mid?rlkey=em74hjb4j3z61w3gmg2832uyk&st=9gs1nt80&dl=1",
            "https://www.dropbox.com/scl/fi/2vrvn988ft4wy02kutk9c/midi4.mid?rlkey=wrdmalbs4eovuyaeoenh68mtj&st=uw6ar2dk&dl=1",
            "https://www.dropbox.com/scl/fi/vk09oalrg3gw0glqe020i/midi5.mid?rlkey=7rnd5kikddorngymr2b7233ah&st=6cvbge6a&dl=1",
            "https://www.dropbox.com/scl/fi/1at50qmesrjkg9ryjv4mc/midi6.mid?rlkey=yhk3xdljy71q48w2qbl8cznph&st=pfeih1tl&dl=1",
            "https://www.dropbox.com/scl/fi/keqdixqfx9svmd6hw8jwl/midi7.mid?rlkey=5oz2gwlul07fejteihtibkfgz&st=neuxkd2r&dl=1",
            "https://www.dropbox.com/scl/fi/sk0zxcq19qjexuiv0515o/midi8.mid?rlkey=awms6xn99tonlip4hiok4wu2e&st=peq8i4i2&dl=1",
            "https://www.dropbox.com/scl/fi/jowt87fryws3bvceqp5xn/midi9.mid?rlkey=dn9bedhmfiljh9wi4c86ec8ru&st=pshr7cxw&dl=1",
            "https://www.dropbox.com/scl/fi/imlug695i98km7oqdqe5g/midi10.mid?rlkey=an1twixs6imsvf82uzgaobhxa&st=thprb23f&dl=1",
            "https://www.dropbox.com/scl/fi/agkr6h9t8gjqmn722fjca/midi11.mid?rlkey=zeelh6s0fzmzn4nr0h8xkf9td&st=l9fs696o&dl=1",
            "https://www.dropbox.com/scl/fi/akylzkx4okb4klokec84x/midi12.mid?rlkey=w2sw26n0klqjglsy6twrct9ua&st=akksde42&dl=1"
          ],
          "Gb Major - Eb Minor": [
            "https://www.dropbox.com/scl/fi/jr0d09jl95j6x734tuz9i/midi1.mid?rlkey=nr07s2crfp1gdvxq4texxuxxf&st=mx1ox7nv&dl=1",
            "https://www.dropbox.com/scl/fi/maa8uv5b7dmqr3ljat16v/midi2.mid?rlkey=92wm0gu2k1v2z4t8prmvvnabc&st=f8g61fxs&dl=1",
            "https://www.dropbox.com/scl/fi/lru86tm3uus5d71h7tc7r/midi3.mid?rlkey=7wkbzl8fl8jugculhck0cxmxe&st=aktgkctx&dl=1",
            "https://www.dropbox.com/scl/fi/8o4pvmlastdt7dfd7cios/midi4.mid?rlkey=428me2moc903hfh2dgjyd1pzn&st=ekigxfte&dl=1",
            "https://www.dropbox.com/scl/fi/tvoii0run5tsy26nifqtv/midi5.mid?rlkey=317t4jminiwudulrj8pi64bgk&st=ojx2vi24&dl=1",
            "https://www.dropbox.com/scl/fi/2ycjcu6rmm29tmrzoethe/midi6.mid?rlkey=g2jn7rrpsmgtexri0adlj18gl&st=jr7iomxa&dl=1",
            "https://www.dropbox.com/scl/fi/jxeo247bxxl7557sjwikj/midi7.mid?rlkey=ht3is3hvdgbbyt6q9pgn60avu&st=61inwzub&dl=1",
            "https://www.dropbox.com/scl/fi/0u8d8juc99kfe5iw9r49f/midi8.mid?rlkey=8risj3zdtivkoxthsacpjedqt&st=hq1vpz7w&dl=1",
            "https://www.dropbox.com/scl/fi/04bj0q2eoe708t6j379py/midi9.mid?rlkey=qoevkjuevncu4y7ndw14ou9s0&st=xzs747jh&dl=1",
            "https://www.dropbox.com/scl/fi/92db9pi8vinzhhnumsyjs/midi10.mid?rlkey=t7fqtu3jrwdbsmcko44q0mrh4&st=im5fnh39&dl=1",
            "https://www.dropbox.com/scl/fi/o41s4j9wign6o9jnykehb/midi11.mid?rlkey=ckq60z2olq6z8h9nb45j9d0u6&st=1g0xs59a&dl=1",
            "https://www.dropbox.com/scl/fi/u4rxqeagau69qycokog43/midi12.mid?rlkey=nb7p1sx3kxe0x9vvhh8f4y0u8&st=pdlxxfp7&dl=1"
          ]
        }
      }
    };

// Main service logic
export const midiService = {
  getMidiLink: (genre, key) => {
    try {
      const genreLinks = safeConfig.midiLinks[genre];
      if (!genreLinks) {
        console.warn(`[midiService] No genre found for "${genre}"`);
        return null;
      }

      const keyLinks = genreLinks[key];
      if (!keyLinks || keyLinks.length === 0) {
        console.warn(`[midiService] No MIDI files found for ${genre} (${key})`);
        return null;
      }

      const randomIndex = Math.floor(Math.random() * keyLinks.length);
      const link = keyLinks[randomIndex];
      console.log(`[midiService] Selected MIDI link: ${link}`);
      return link;
    } catch (err) {
      console.error('[midiService] Error generating MIDI link:', err);
      return null;
    }
  },

  getAvailableGenres: () => {
    return Object.keys(APP_CONFIG.genres).filter(
      (genre) => APP_CONFIG.genres[genre].enabled
    );
  },

  shouldShowFakeError: () => {
    if (!APP_CONFIG.generation.fakeErrorEnabled) return false;
    return Math.random() < APP_CONFIG.generation.fakeErrorChance;
  },

  getRandomGenerationTime: () => {
    const { minTime, maxTime } = APP_CONFIG.generation;
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  },

  getRandomLoadingMessage: () => {
    const messages = APP_CONFIG.loadingMessages;
    return messages[Math.floor(Math.random() * messages.length)];
  }
};
