import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid:1,
      name:'Sagar Joshi',
      status:'Making your Gpay smooth',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUUfX7LjZHecpcSnp5NWH0ibcJo_DFfvekw&s'

    },
    {
      uid:2,
      name:'Yogesh Aryal',
      status:'I want to learn mongodb aggreation pipelines',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdkaTIj5LJymv03dKVXDvuFlPQhRaBM68iw&s'

    },
    {
      uid:3,
      name:'Sujit Nepal',
      status:'I have already learned MERN',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFRUWFRcWFxgVGBUXFxUXGBUXFxgXFRcYHSggGBolHRUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA+EAABAwIEAwYFAwMCBQUBAAABAAIRAyEEEjFBBVFhBhMicYGRMqGxwfBC0eEHFFJiciNTgpKyFiSiwvEV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAICAwEBAQAAAAAAAAERAhIhAzETQVFhMgT/2gAMAwEAAhEDEQA/ANbC8IJExdXMJw+JldJw/D2vzUMU1kwFfmvxUHOJETppCqVHZXC8qw5sFBxAEzqnKLF2nxRFxOOzNgQss050VhmEOXMjIPahUfJWjgK0aqiyneEZ9B0wncpSNhmMiBK2MFe5XOYLDGbrosOwwsusX+lxIhQaN0zK4mEk4mQmyokJQmkKE2VFhNCAEWpsqKQmISUC5qG5qOQoEICu5qG5itEIZanoVXNTI7mpI0YbDYdwsif2TZ0V5rVIBSrXP1uFjNOxTt4VOy3HUgTdEbTCNo8nN1OHFphXcPgjF9FqvoSVJlJG0/Jh0sA0TZFp4G8wtkUhyT5Eey8lalhhGiC+r4soCvZUxpCZQWs3EVSAbQqWFa4unZblXDByenhgExsPTNlJShKEIRhNCnCaEHEITEIkKJCAGWqJaikKMJGCWqJajkKBajQruakiOCSDxaCcLyNv9U6/eh3dU+707sTm8+85+kfVepcM4jTr0xVpOzNPuDycNWnoU+uOuftPPc6+lxOEwKdI0kkydMjpJpSlBEknTIBJQlKSAUJQnlKUA0JoU5SQEITFScUiEjDITQiEKJCDQUXIhCgQppwFwSUyEkjfNuExIYQ8M0M3+UfO62+C9q8Rh6r6lJwh4hwcPCY+FxEjxDnKxMbg3U3Cm65F7XBB0IQsNWhwPIg84g8ivSsl9VwbY9c4Z/Utoojv2F9URmNMANg6EzcO5gAj3gdBie3OBY7L32bmWNc5o8yBB9JXh1dwkuDgZcehO8xsP2UmVL8h7rO/BzV/l6j6K4bxClXYKlF4e07jboQbg9CrS8Q7LdqKuEc4ta19N5Be02mJ+E7G/I6LqsN/Usyc1AEEjKGkiBuCT8R02Cx6+LqX01nySvRglCzuB8apYphdSJtAc1whzSRMH9xyWks1mhJOkgGhKE6SAaE0Jy4c0pQEUpU0xSBkkznACSYA3Oix+0HaShhKeeo7MTIa1kFzj9h1KDbJUSvLcT/UWrVDg3u6IcAAZc57XC5MxF9Bayp4njGPeRlxLiLGWlrYtqYAzD3Wk+Hqo/JI9be8AEkwBr0XAca/qQKTqnd0muptgNe5zml5I/SzLcT1ErL472nc2gGYisHOy3DWxmMWLxv5WHRec8d4n3hAk5W3vGp6DaLKufhz30nr5P46rF/1Wxpa7I2kNIdkPhvyzEGdLp159VxDi3KTDSQYGlrBOq8ef4ny6/rWdjahdnc4l0azt+3RPWxBfd0E8wAD8tVmUa0WPoVc72JWusxKIE3MWsdb9UZriTe09IHsqwtdWP7sloYYIHw9JM2KqVOLlSmaby0kEjcaXG0+aLSqANiDM+wUv7hr2Ck53jBgOicw/SCdd0AMIOUiDyVB0HZnjz8NVztktdDXj/IT/wCQ29V29Dt4w1SxwLW6BxO+8jYLzLAEl7Wzq4A9bo+MJzukZTNwdln18XPV1fPyWPam4h7hINjcGQnLn/5LyvgfFa9Mgsc4smMhu0kgkAA2mVHF8WxTsxqVKrQ6LCQ3oBGgWP4Lrb80z6eqPxWQZnvgDU6D3Kz8bxs5D3Ui1nOMewP3Xl+MxlR8Gq97jH6ybctUIVSQBmkcpsFU+CftN+b+NriHFKjqkl7i5pscxJHkf2W5wftpVaQK3iYbZgIcPax9pXH0CczTqJ2uRdb1bCMiWlrSbw7TSJg3C0vHN9WInXX3HXs7bYaYl3nldfyVHG9vW6UqTndXWHtr9FzGHpsy5nBgA1zWg8wRYpqvE3NpyAXh5IaWggaXgnZR+LlX5KhxvtZXeAytYXOVoyzyzTqAuQql1R3UmOUfwi1K4e+aryOvxRyGq1+A4HPSqPnKS7LTebafkLSST6Rtv2p0qBpsgU81QOzQ4AgtjVoN9tlHEcdrkQyGAD9A2GpHILR4liabGua45mkABzR8D265XcraLnOL9pC6mabQLtDXP0c4A/D5dd0WkzeK4oOIyuLpMn4iZ6yLrKc6/kkXxc6qDqumyztVITju4p1WJvNykpNr4ukwRleDN4vIHXqhUqsR8v5R8O+mYB8MkAuud7kT5/JTxXD8h+NjmnRzSDPnyWrNGq+D7Qp0qm3NVY9YKlTf8k4S9TdBnl811OJqMqsa9whwAa7ebWM6+65Fr+a08HUdEibC/l+yoRsYGkaeIZmBAJt6i1+V1rccbleHuaHtiDOxG07FZPD8YXjI6CNctp82dei06ONe1pj/AI9LRwd8Q6HcFJX6Fr8TohjcjMwAEMIhrTzc42VOr2heM4j4j+rxBvMt0WnS8dBzqbAxu8eNwaL+ERry5Lj8cPF4STmGhu716omFdFfjS58u8X+6Tp9VMVqbntzAtbPiy3MdFS7pzfibEbGyJScHuDAACRlGtz6plG/Wp4dzyWVC0EiBkcTpoG9PNSoUKAcc76htaGgF3SBJCwcRgXsLpLRkiYeJvpF7+iHjcSGx3dR8wczpInpAOik9aePwgbJc8MaDYP8AidafCwSVUxnFH5BRNRwAFwWhuUcuZKym454ILbEfqgTfqd1GnDny9+pkmC4np/KBq47umta5pDjcwZve2ZpHhEdVp4PjYLe7q0z3YEAsJGXqea5/E1IhuSN5IM309EHH47M1jYAyggkfq3JPVFpwbjeLbOSm4uaDOvhk8hA23WPN/mhPfJsbKbniCdvqs7VSBEb6yhP5m33Tl5d5BCqlSon1BFkygWJJGuMKK6xgoCsvxOeM5uAAHdBoHc/NaRlVvh7j4myLsJE77wOqrMB1R8Dj3Na6kYLXAjxAEtJ/Uw6gpqOHc92QGXXN9NJOvkqJZwOODXHM0Oa4Q5p0I6HY9V1+G4nTLWuaCAG5M0AyI+GoBof9Q5Lg3SDlcIIN+Y6FaPDMf3bg4AGDo74T0PLzTEuOm/s6RIdIboRfwkzoXiwJ6LoK+FAyvBy2s4ENeDHwuB8NT1WFR4dSxLe9oO7uLvbo5v2e2dyPVamOwmMZRyEd82bOaG52jQS11j5gpaqQDF8Vp0yHtLM8a+NsnQ5w0QfK6xcbxh1Wo51AXc0CIuLQ7JySq4OmwufXFh4WsIdmc60uIgQ1Z+KxODaSJqZgJtZhcTGS1wBubKeu5z9q5466G4hQfSfleHSQ13iNxI08/wBlWFcNDtATdpNyOnqpYztI1uQNaGiLBzWut1c4/NVP/UNB5IqUhIBu3wz7a+qj8/8Ai7/5/wDTNduSUephutj7hV6opkZqbwRu2QXMnYxr5oQqnRazqWbGHXN5uVdcGjQ5ugG/JRNM2eGun2aCq1OuW3Bv9FMYl1QtZ4iCQIbcnyG5StELENc4ySABqZWdjHgxey1uMBlEGmTL/wDEEEs/3kWzf6RouefWnXQaQptXIlVqD9IUKTcxvtdNRZJkbKyfC0ui6m1SpVfeBYafuh1X3srD3Az99vyFSqCClTgzqdpJSVdzzEJJabRqC87dFCULOZ1Up52K0ZtThlVjgaNS2cjI/wD5buvNp0PuiU8L43UajhTe0w0vkNkbF2w5FZIWkC6uAB4nsH/UWgc94jROVOFi2va4tqDxA/Frm8nfqCs8NxrKbpc0uY5pa5ptrrBVFuJJYKbicrSS3m0kfTRAlPSdZw/jNGg5xpGpBbAzta4gbsde4U8J22r0g4MDb6TmOU9ATp00XKMqEaJ56I0bW1iONVq72ms8uGadgI5ZRqFz/GaXd1HEkwTPLX5q9hGZ6jGZg3M4Nk6CTqYQO2GHY14FM5gDlnSRMSeSw+X7jo+H/msF1STmm/W8KT5zAzO/57IVekWmDylQbPNStu8GxbQXAtnM0i9oM7ctPkr1WrsDYErA4afGJ129FrPduVfHpn8vvBmtLpja5OwCTcY5l2Oy7SPiM8jt6Ko+qgOfKvWciVR8mShSk60yhykbUwrQ0c1XxlSSG6flkhUIAaLn6INMeIybqVHquAHNAALjy6olWjeBruEImBHv1RaBHta22pTKuSkkYwKOx4Ig+iBlOqkrRggcjUahaQ4Egi4IsQUOlXLZi0iCmaUyWsXiM7sxABIvlESdz5lCCECpZ0aWC5lJ1RVsysdyf1W6I0YNgXjvaZifG23/AFBbbeEPrve2nSzgSDLgwAkWBdz6C6yMGC5zW0mk1J8OUEuJn/EL1Z+H7imKdIS4CJH6f8j1eTcn0U+HnW3x9+MryniPYzF5yT3RJ2FQW6XAWTiuz+KpCX0XgDUgB4HmWSAvV38ILjLnEeYNvUIlLhlVsZXA3sZg77GFpfhifO2vLeD4ERncbnQC5jnHVJ7+Wmy9fwdGswwGggnxQ3LPq28rnf6kcLYaQxLGw5rg2pMSWusCSBch0C+zlN48YV9+3nxuoB0FMX2jZRUgnE6qRlqdrZ521TOrSRb0SAhqmwiCU+Gpi8ugx6BDxTpdyAtKjWqB2ggD8koMqtf9LdNzuUEMT0qJJvsmJAukYbklJ75PJJBrHeCIEqAKHmTynqcFlPmQpT5k9LBJTEoeZKUaMGa5X+FcMr4l5ZQpuqERJHwtnTM42b6laHYvs+MU8vqkihTIzwYdUcRIptO1rk8ojWR6vhsSykwU6NNtNg0awAC/lqeZ1Vc82j1+3P8AZ/sdWwlN7ziA2q8NkMEhobNsxu6ZvYaDkq1TieKoOJeM7d3NH1C6CvjXOtz+ipVr2K2nOQrT4HtM17ZGV3Pb7KGN460fo97g7WJCxsXwQGXMJY6Zkb+YVWnTxYOVuW+rhLfceyLsDVqcRa0Zg9zP9JMfSyE3PjKdSkXupte2M7m55MgwWyLW1QuG8El2asS52t9B5BdFRptbollpyvM+PdjsXhWmo9gfSGtSk7M0Dm4GHNHUiOq5+V7q2uMpBiCIINwQRBBG4heSdp+DtwtVzWmWnxUwZnI7Y+RBE7wsuucNk1qkgAbILHQZ1TEpMFwswM+pMuPkESnp6e6jjWgAAaJF/hMXEQmEHPJcToEHZOHKYNojS6RhZRF0kxYSbpJGaUpUE8phOUpUJThBJpwUOVIFMnoH9P6//tqo5ViT602fsujOL5OH1K887M4stp4hoN8tN49HFriP+9q67g7AabXakgE/Q/MFb/H16wrGk2qeZPqpOxCz8Tictvl+6qCvdaahsHFZRNvVR/8A6RNm/Sw9yFlCrPkjtrgaINqDEQLolOuDqVjitKa+xskcbpxNMCSbBcJ/UHENqGg9vKq32cwj/wAitjEvim+XCQ05QTqeS5HtE+O6Zu1rnf8Ac4D/AOiz+S+lRjkpi5MSokrAzlyJmERPUoYamKQEzDRNUr8tkKVFBpmqUkOUkAQNU2NG/wAkKnTcSAAZJgRqStQdncV/yjZod6Hl16JkrUaDT+oDlKPQ4fns2/UEQk7gWKGtF+oGk3IlTfwjFU2moaTgBEmLiTGgv/8AqYQp4MNnNfyUn0GGSAQYtCq1BUbZzXt0+IH7qdIOJ5eco0NLgmHLXON4dSe3pYB+vmxdXwt0UKbBVa0GXOuA4kuJDRuAAuPbiXU6jTIDRHhBMlp+K25IJWxw1jW1HhwBOU5bD4m6R6En0V8UqvuqTJndQ7z3VXDNIpOceYUWPtmK01OLb8RCZlQqkwyUU1LwjTXm1baorMSYKo1DZEo3b6hGgHiJJLJ5k+wEfUrP7R8NOVlcERkgi8+EkkjpDh7FaGMEhh6kelv4Ue0NaMM3/cAP/lPylTZv2HGkp3WUSUisFEolOUyDMSmJUgN1GUAoSTJkjegdnuCCgXOeQ9xiLaAbid10TayyhVUu/WmJ1sNron9wFitxSFUxgG6WKla78W0nK4A+d1m9pKtNlIOAa13wiAAYiDflCy3cQ8SyuPVqj4gCNOqVPWZjcS13wtiN9yt3sw4VK1HMbCWun/Sw6+gB9VyzGyYV7gj3d5DZu18jWwY4z/KOblTXX8XqtdFCjdjTLnczzWRiKt8rdAp0qpZRcebgB1JF/wA6rPZUWtqMX2ugKWFElUmuWh8DJ3KcFJ75VzhJzNe3pPssym5W+EOioBsbe6cCfED4QYsCPYg/ssrtJigadKnvd58hmAn1J9lvcYaG0ahP6QHezgVwHel7i43J+XRT3cOIp07mHkoOWKjSkmlJyAk1yiVEBJyRk4pJikgO+FZVsfxMU2E6nQDr1XOVuJ1Do6NrCFTc+dSSeqq9zPSfF0juLNLA+b6EesTHJTr8Rpf5XXMEpKfM8brsbT1n22VXiGLa+AC63kFmgo9CnmMAEnpt5ovWmRYLQYteVs9jsSKWKY87gsjch3IeiqZWU6Ye2C9wNzBjUW2HOdVTbUIE3LzcOBuINr3Kc9E2+M1i+oWta5rGkwHWNzcn80AVam06CSei08Pj6eIpjvYbUA8RG+0+qE1oHw1wB5Cfkts32nRcNgsvjqeyqYnE53W02Q8Xi83gYSQNSdzuUNpDd7p2/qEttKVOtlcPNUHY9o5nyQXYpzr2aPNLyh46btPjh/bOvOcAD11+hXC0zb91Zx1dzhvlBtO+0qrTpF5DWiSdBz6KO+t9nJiRc7/IKDid7q1hMM0kE2g6HmOc9VZNVmYAgTvAbGnIiJUKZaRV/F4RsF1OY5E6cz5KrDQOqACSnDSdAU7XXU6Qc4+GTF7befIJAGE6McNvmEev7JIyg7RtMIJBRG8/ZSDp81mAhTKkyk82A9dvfRWqNEGCT5bT/Ct4eqCeXONttdtNueyuTQr4fh5N3nKJgdTyF1oOrtpNLWubAGwm55nc2KbE2iA1ocGxvAFzI2EfmqzsRiAZhtj13E3n3VSYn7RrHPLtpuNrbqEnWYm3odgotbmgCTzjVW6GH8WV0Q0cwbxoBufuEGr0w7N4J/LXVuuXWmm0nfaE9Ks1riBrzkZZ6QEam+Wybk6Qbm0nzj9k4KoOYZiB6E/m6j3bhq2PUq42le1huZ18vWUQtYILjDfczyvp5plrM710wGiZjmrVLhtRwzOIAF+ceyv4imBBMAW0iw205/uoMptY0kAPvLriYi1vyI6owaJR4WwtgOcTfMCPDus2tgshDmzLSD7HQmdRC1+H1BU8RkNnUwADvEAIWMqgSAZvIB6WI6hFkwRn4up/xqkc5HmRfzQXuvO+k/danGeHCGVGAwRfeLA67jWOjVkOEa6qb6ULTdlIM2m+txysivwzTpaRIQKZ2dp0R+8IAJHMemynqfuCIswTbySegIA9SpgBoJiJ2HTSeqbOdQf4/Psq7qklKWng5ptOoIEbGD7lJDpVbEOtvOySuJUi5Ho0xvqduXn9UGm2TbZXWvbM/nkphh4urcAWA+tpTNIJloHl02J5oVZ03UadvYfNPdGLfen4s2gIvy1gfmyrVSSeUncG8wkGkug/PRaQoXDiZI57nbXVFoMw5AGg8j4eel+s6IYlzrm5Bzbn+f3UqxGmsFAnU8/nv9YR5BYo0YbBsSRBhWqL4tmzCfUbEWt1VfE1sxyiYDMrYPid/uHUk26qFJhBJJDbkxodBa35rdUkbE1cph0nfeIuquBc1wIdNjIGwA3PPeyLVqNcNLEETawHTqgVqYaAQ10RZ0bzv5D6oBV6rjJnWwjQDXSPL5qWGa9wLTbYkyI5k8zY2UqNLOCDbLsIkn9oCJie7DRlDxOpmwPtMiUBboU2sYMzi4RrsBH6Qg4unABaIA9wdiY5ymq4o2pt0jptyV5gbkItzjpoZG8iU6QFPHtIkjLcEkaEwQ7wyYMkm1iq3FMOC7MN9IiCJ1+cqTSGkgbWdqTrHolVq+ANm4MjrtlPXb1S+1KFMAX/AD+UdlTndCrQDEQnY6yz9qFgHa3NOaLcpJdBmMsGfORb06qIiLb2+ydwtBSNB7eX5+fZJM0+adBACzYG/wBU1KqNLdUzxyTikAb3O/RXCpqjJ6n6JsO36+qI5hm2/PblCalaNun5+XRRF8OAFh9fz0QXV+fNMX9U2aReY/NPzZZ4YbXTcz0hKduX57ogxUAgNk7EnSd4UaYJMAHSf31V+JaKyq3MXASRaQYIneN9NlHu89xtAEaD1RaLIElsn6eXunralvPQk8tRbffRMvSiWAmCLzEgkyrld8thpIFtTyEIFYRY9AD+fZMaoDbEa2Ii/SPVMJ0XkCeXWEd1ZmWDa97mT0+SFTb4S7Qg+9tuWhQg3MCSNvVAXKTs0ujaLgWjQ/VM+p+q4689tSnoQacG0bbnT7z7oTyNBp8rHlsq1J/7oAnrr1218kqrRYGeYO5jXzVbvGZjI9vnKtuqBzQ1oiNOh2hKe1A1iDBty69fsh+QRCDYmeR/hVnSo6OCOqnaNfy0QiCva9lWc1RCnDGNS9kkJJAIbKZ38kyS0I9Z32+qmwaeSZJLo4kKYMKOIbDyBpKSSc+iW69miLQLRrcjdE4f8Tv9wHpJSSTpA4ioS6Cd/sgPcZJm+kpJIJKn4he9/uq9VoBICSSk0RUOk6fdXabj4b6AR7JkkxUa7iXGdoQafxRtf6JkkHA2m7j5q7gjf3TJJwqTnQ535zQMQPz0TJJdCIlyd6SShRikkkkH/9k='

    },
    {
      uid:4,
      name:'Anisha Paudel',
      status:'hello i am learning react native',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9twaiIU_ml_e5QeiCSaaHw5FsGiZk41WI8Q&s'

    },


  ]
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={true}>

      {contacts.map(({uid,name,status,imageUrl}) =>(
        <View key={uid} style={styles.userCard}>
          <Image
          source={{
            uri:imageUrl
            
          }
        }
        style={styles.userImage}
          />
         <View>
         <Text style={styles.userName}>{name}</Text>
         <Text style={styles.userStatus}>{status}</Text>
         </View>

        </View>
      ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8

  },
  container:{
    paddingHorizontal:16,
    marginBottom:4
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor:'#45CE30',
    padding:4,
    borderRadius:10
  },
  userImage:{
    width:70,
    height:70,
    borderRadius:70/2,
    marginRight:14
  },
  userName:{
    fontSize:16,
    fontWeight:'600',
    color:'white'
  },
  userStatus:{
    fontSize:12,
  
  }
})