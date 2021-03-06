'use strict';

const _ = require('lodash');

const user = {
    eos_account : 'useraaaaaabg',
    nick : 'yepps',
    img_url : 'https://i.amz.mshcdn.com/3NbrfEiECotKyhcUhgPJHbrL7zM=/950x534/filters:quality(90)/2014%2F06%2F02%2Fc0%2Fzuckheadsho.a33d0.jpg',
    bio : 'Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup.',
    location : 'USA, WA',
    telegram : 'yepp4you',
    website : 'www.google.com',
    linkedin : 'yepp4you'
};

const eosAccounts = [
    {'name':'eosio.wps', 'pvt':'5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr', 'pub':'EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D', statked : '10.0000 EOS'},
    {'name':'committeeaaa', 'pvt':'5JUNYmkJ5wVmtVY8x9A1KKzYe9UWLZ4Fq1hzGZxfwfzJB8jkw6u', 'pub':'EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S', staked : '10.0000 EOS'},
    {'name':'committeeaab', 'pvt':'5K6LU8aVpBq9vJsnpCvaHCcyYwzPPKXfDdyefYyAMMs3Qy42fUr', 'pub':'EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA', staked : '10.0000 EOS'},
    {'name':'revieweraaaa', 'pvt':'5KdRpt1juJfbPEryZsQYxyNxSTkXTdqEiL4Yx9cAjdgApt4ANce', 'pub':'EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV', staked : '10.0000 EOS'},
    {'name':'revieweraaab', 'pvt':'5JRMbcnc35NkvxKTZUnoe3W4ENQCjhMUFwjN5jQmAqN9D7N6y3N', 'pub':'EOS6cNcTC6WTFkKV4C8DoxcTXdDTDKvj3vgZEVDGVFckK1eTNJQtf', staked : '10.0000 EOS'},
    {'name':'proposeraaaa', 'pvt':'5HqyipkJSm5fwYhbhGC3vmmoBwabtgJSPecnvmN2mMrCTQfWBSS', 'pub':'EOS8UkmsnCo4GxDihbKwgoZY6f2QLSMEqBZ2frGLckxrCHrz15r7X', staked : '10.0000 EOS'},
    {'name':'proposeraaab', 'pvt':'5KPr55J2UQNUh3xP5Q6ebqqV6MK5usrXxG4qqRfpaLieGa8VpCm', 'pub':'EOS8Smcv2eMoFcp1EQSBxcAeuBowSS9xesuHjhvTnK4AACjRycTVA', staked : '10.0000 EOS'},
    {'name':'proposeraaac', 'pvt':'5JV9UNEpPKa4sqxSxvGWYPY9ZBTzAttyq7ShPvLUJSetwAeSXFW', 'pub':'EOS57VTWSiPyx45cSWGdGNtAZnmpqMrAvASQmL9hmXnoLNrgadwf7', staked : '10.0000 EOS'},
    {'name':'proposeraaad', 'pvt':'5K4GSGP2r1Yu3RqmPZPF8Hv6Zrv2YWsUEoCqwwHxKsZavz2tChg', 'pub':'EOS5dt9CWCKM1scrWpFsRbzY71Up9UYFmJs1ySFKLJDGdYJmgEH3f', staked : '10.0000 EOS'},
    {'name':'proposeraaae', 'pvt':'5K4MmsY7Th8DqjEY2vbM7npaxSQ56XzvNULkJeqKmbYoVRmPPpB', 'pub':'EOS8FdMPpPxpG5QAqGLncY5kBrEQ9NXPKCKnLH6oWDMPR8q8BrEmT', staked : '10.0000 EOS'},
    {'name':'proposeraaaf', 'pvt':'5K4d3ck3e36DoLDQDAqE2uHE6X831RYS8Ac5Hdir4CmT7WbvQJB', 'pub':'EOS6iwndPo58Y2ihWshfhnFbEBJHGkZtujR1bn7bVLngnTWFA8Hm3', staked : '10.0000 EOS'},
    {'name':'proposeraaag', 'pvt':'5KWg3urAyLF2tt1Rz8ckuK7QSiKU1CvXKhhzBPfFQcT83vjyCD2', 'pub':'EOS6QBgrm2h5f9B2RxLVXeD3HrchTUgJLtuYWPDQvi5T73enWgvVC', staked : '10.0000 EOS'},
    {'name':'proposeraaah', 'pvt':'5HqgpWWpkRqfi3JSxsR3bsnVCvdgyf98msTRymZvQHTHNSHSXx2', 'pub':'EOS5LF56ZLEUAh3G9vRxbBHkFBZdx9F7bxmaARuiz54qvCAxT6Lmz', staked : '10.0000 EOS'},
    {'name':'proposeraaai', 'pvt':'5HrEMEE5dbNL1VZPhpedt7MvKaoKP9iaMGwLw6uu3LS9CXnsyGx', 'pub':'EOS5vs19cixeVh2LJ61moQwTSgeGBVj8rZqjE36tAXXF4tFcGdCJw', staked : '10.0000 EOS'},
    {'name':'proposeraaaj', 'pvt':'5KjhQZ4YZ7mDRQ4ShRhdMn8CdnLBfvvrMjfKYsHoY4gnkRsYhoe', 'pub':'EOS5AdtgQReNDbWtSAJKj6sGh9839HFyCzF1N32MpFn7s7VjpU9jB', staked : '10.0000 EOS'},
    {'name':'useraaaaaabg', 'pvt':'5KfNvqmns8MP9PSPavzFzuoahB4SdcTCbKnjYiu62kupnEW1Nx6', 'pub':'EOS7VoDqSyvd1zM4qm4mdjNsT5obSEnFRCuxzfybnsioWD4NkCmyw', staked : '10.0000 EOS'},
    {'name':'useraaaaaabh', 'pvt':'5JY2NoQEWEs2XXFGbxvVBe63paP8zVRwYVsieAJnobAug9bE42r', 'pub':'EOS5t4DQy3mnbyJmMtc53A8XbNvWrbj4hxBySxKNHP2YMU9QusoLQ', staked : '10.0000 EOS'},
    {'name':'useraaaaaabi', 'pvt':'5Kge6y6AznDGXwczw7My5gtW7dvs2qWBFx7FWtoLRn687s7JdLW', 'pub':'EOS8PGBfYXjn2Jws8zWeG8fHF9bVUs9P2tzfk69kbhKvYo8BHkfNN', staked : '10.0000 EOS'},
    {'name':'useraaaaaabj', 'pvt':'5KBCNAkLw85jTqqtwm9pompFVyLUCiYEzBMniho2xDhn1QMLY6g', 'pub':'EOS5khGjRq5WGwoybXUAhvPVYtbzeTyrhEaZgQnXesavwx4AtpYBE', staked : '10.0000 EOS'},
    {'name':'useraaaaaabk', 'pvt':'5KA799q8UPzfwK5c7qDL1YuSRRfFD7cdTquiM971BZfPdY6HqFi', 'pub':'EOS5iSsGmj6N56s855SPNgYT65GZpDwED4de7qGmDVjnnJa1Fm8nE', staked : '10.0000 EOS'},
    {'name':'useraaaaaabl', 'pvt':'5JwcK4bw6wv6tHWdmXZCPT2QX8Z16nygHoCKn8Tu6JPJY758smS', 'pub':'EOS5zfnPJwYcYmd26BbUdf2ZsveUtReRDLSsVWRAnbqfSBBhqSgo7', staked : '10.0000 EOS'},
    {'name':'useraaaaaabm', 'pvt':'5KHqHT7C99AHYfKe8Pv12G76siWJGKKJwAu1Pjv6MKNodFGng5B', 'pub':'EOS8WHgE29TCr68p8Xx1EJB3xL3YkdvYrJoU41GTaYBSG5EBjFRms', staked : '10.0000 EOS'},
    {'name':'useraaaaaabn', 'pvt':'5KJgV2MVospjWvKgX8C5zCKwmhBwWJtevMX2BBnmcAvRcN64EgL', 'pub':'EOS6DGcEP5uECxRSqz9aEgZuojnSUcG3pLcN1RJJUDWarfBRtS2vy', staked : '10.0000 EOS'},
    {'name':'useraaaaaabo', 'pvt':'5KTMJfihEMFTMqEMTkQ18qY4eVWNyiHEmeeq5Fcp86GrfWZ1zw4', 'pub':'EOS6AqALucsJ9t3HYDpZVCFtoiidYMWEu7yAac8AnnShSZtkgCHiv', staked : '10.0000 EOS'},
    {'name':'useraaaaaabp', 'pvt':'5KFfGj1PBhyS8XBKRTxjfxYaqfhqrhNA72FeAiFm2GQMH4jDntC', 'pub':'EOS8KXZWXvNqB1E6jReh9yFP2BmjUgRMZXwtnDcDd3sPPdRtwrUHV', staked : '10.0000 EOS'},
    {'name':'useraaaaaaca', 'pvt':'5Judi2cWRRnnRoWwUukgd8qVw1By4rkRj1U2c5CxtsAj847bURM', 'pub':'EOS57ACjYm5wB8XPVfdLemDTxfVVvdGPG7zAZeMhc7QrvshVHALK9', staked : '10.0000 EOS'},
    {'name':'useraaaaaacb', 'pvt':'5JHpX8HM4Dz5LEGrvUh1PvFHrhxpYAKeTNLFuBiapDbcHEqoDSh', 'pub':'EOS5dVWdzeQHqtMgTGVPAR7BLmijJN1iPoB4RzmZtVyAJYFiVyYDE', staked : '10.0000 EOS'},
    {'name':'useraaaaaacc', 'pvt':'5Hr5UJzPPALfH4u4of7ZhUawVHENhdKhVehsGKKMais332uJWbB', 'pub':'EOS5W4CFNL4TnQhZkECJA7Qi2favXsPh8Dp4jLx7R13vQ1fvMRCvY', staked : '10.0000 EOS'},
    {'name':'useraaaaaacd', 'pvt':'5HvSyeAzjm1imrb4yuSjxSUws9GQUXTECkRnTYvSPBN1C4AkUmy', 'pub':'EOS87QWd7JkNFmf89eV2rihbQuWnsU739XGJiDujpYcbvAHnJAfrt', staked : '10.0000 EOS'},
    {'name':'useraaaaaace', 'pvt':'5JtAFCpuaZfWszXFuxZs2WxrcoeneRWTYHDojP1cvLLGCsX53gx', 'pub':'EOS5VWnx1W8fMrTW5jvCEYP9PtWB4SjbBh5e3YS8Frs68MVZzmkXT', staked : '10.0000 EOS'},
    {'name':'useraaaaaacf', 'pvt':'5JRUafGvR3P5GZGxN2qWVDguAZKCwXfay9BugZQ3KfeQBV73WNd', 'pub':'EOS6aCZsAPU2qUU7QbZKNpTZbPA4rLiePSvtwtymHjXSUyifqCSbi', staked : '10.0000 EOS'},
    {'name':'useraaaaaacg', 'pvt':'5JDwwaXVjZHWrMcmY6HKQRr2NAUqc22ARZEow49bccYTgffqKPs', 'pub':'EOS61Uv6rkkDmPicWYRPZLpcz1GNtpQhjXMPZZ6LzDDUAdFNmtRqj', staked : '10.0000 EOS'},
    {'name':'useraaaaaach', 'pvt':'5KJqzboVCyqixK9ortCuA2LBgKfn8L8UMC1zVZ6gSraquC8kYF4', 'pub':'EOS8AAeqdY8hJKE7cd9Sec4wrwze36fr6tnN9AqKHfu2YbDewywCd', staked : '10.0000 EOS'},
    {'name':'useraaaaaaci', 'pvt':'5J2RZusb7i1JhMr9s1X691qqXX7o6KdvQqbXsWJq6H33etiChoG', 'pub':'EOS7oFdw7qKZUKiNXFPyY24aJ47t7iJNms1rvX8oWqLCfrHsMzcKw', staked : '10.0000 EOS'},
    {'name':'useraaaaaacj', 'pvt':'5KSFcGYu8TaTDFmStskb8Yg6exP3SrzS8RNmRsZFTfNnXSgihuJ', 'pub':'EOS75ufXVnYCUg8TUmKYT3pc5gAaNAgNV8FbqvUj6D7XR7YsSi8Lo', staked : '10.0000 EOS'},
    {'name':'useraaaaaack', 'pvt':'5KMgxgEgvLVCzwjcPJG3uYnKbNzQdYuydYF9M3vZK5PDpPn8BF3', 'pub':'EOS7aznXfDCmVztTktG8nSZ2VKUnLgkXdMRhU3JcBmWfDbWov5aFC', staked : '10.0000 EOS'},
    {'name':'useraaaaaacl', 'pvt':'5K7ZNW4gZtU9L3HBH4KME4BAEBJPSwruXrPnZPW7N1J4bdFUDpM', 'pub':'EOS7yY6wVZZfw4nczxhfPE837qCREWehMyJUXg8QifXyAPJwNBJan', staked : '10.0000 EOS'},
    {'name':'useraaaaaacm', 'pvt':'5KWhHULqRjmbkY6LZDsPrYcTBrSuozMWb4P3gr54yTpJ3UGTjtN', 'pub':'EOS5zQt78SSgKYRwHQpKyGdZfr6jVvDmrTscHPuNan1s9rXn1apkp', staked : '10.0000 EOS'},
    {'name':'useraaaaaacn', 'pvt':'5JapB3Br3UdqQEpHwnfhqSMpBh2SQu3aUZpqhAQGzn44Fh3Tw2x', 'pub':'EOS5nawPaNnmQKfH2EnPTDAoAWSpkoeeJhLzpFPKvo4KQC9avt2Rg', staked : '10.0000 EOS'},
    {'name':'useraaaaaaco', 'pvt':'5HwsSm656Lr1r3PW9o2oPTv7bLtqG8wam3LGR4JwaaoptQh1JH9', 'pub':'EOS7NHeGginR4pD4tg4EqPGJgCTkavuQPc5JPv9vJfELEXJxNxnY1', staked : '10.0000 EOS'},
    {'name':'useraaaaaacp', 'pvt':'5JyfrdGnTDEv7yRQjkCRJzo4Wv8M3v7Q2BZgue8CGzht4W9kRBL', 'pub':'EOS4zJPzsTJFXtPsfbuDaMSXeEFxbRTV57pfiEQ7bWGzDgkauN2rM', staked : '10.0000 EOS'},
    {'name':'useraaaaaada', 'pvt':'5K4He512yzzEcNwsWoZMiHNV1NdYoNcJjycV7mtuLPskjNavJ4D', 'pub':'EOS7zq4ipCXmWG8U5oRvf1kFDzUVpdL55toaA3YbKbVo9EJYyPrBf', staked : '10.0000 EOS'},
    {'name':'useraaaaaadb', 'pvt':'5KR5MFZZ1qihoFveiShBzF8bCNSNS9Tb9WKKKBNWwnxhfHsaRkX', 'pub':'EOS813LPMkSYDukREKZZ9hpQaZKQetnFjG4Y8HqEAA4HeFX4ZLH1C', staked : '10.0000 EOS'},
    {'name':'useraaaaaadc', 'pvt':'5KNQwdH6VmqMNFcJDffNi5BbvUjBkZ2w3baDS2crUm9xGs3n3Fy', 'pub':'EOS6Qhf6tVLN4u98vt5hfUG8busY1ueUnBAcHWowbsm56abQHhtiA', staked : '10.0000 EOS'},
    {'name':'useraaaaaadd', 'pvt':'5JywzJwhtCxpmnNLTSBtXJTpAdsJEbckD3RLY1Uq3UYMSfX3vU6', 'pub':'EOS5dsvzDRih3hzYhwacXQbqrZP9RQDXYFtPas7D2Di57UjCjUisE', staked : '10.0000 EOS'},
    {'name':'useraaaaaade', 'pvt':'5KbYkrtzzdVP9qx8x2Rb87Exb6AizuT8Qw4qG5HaTMtyFyp5Ukp', 'pub':'EOS7cVGMQQKJVuX9LtemS558USgWDJx58PK79CzYSp1Eu82nMx9f4', staked : '10.0000 EOS'},
    {'name':'useraaaaaadf', 'pvt':'5JCBJGYXLaH9kqKb1utnyBWwnBxuMkG827JGvJsfZtA9UZ34sLQ', 'pub':'EOS7g4rgDW7BwUqmienfKepx3ZrFHBv8fkL4jGEXpAvxiG16rShKk', staked : '10.0000 EOS'},
    {'name':'useraaaaaadg', 'pvt':'5KEh93zj3LgWUFy1brqKcwFPSXz75kANt1FYLfRmpJWdNphURqJ', 'pub':'EOS7PquUa3KA4PqXWUDvEVkuq4hAxVDDVnBmt3WRJYzehKeKTwrcR', staked : '10.0000 EOS'},
    {'name':'useraaaaaadh', 'pvt':'5Jf3RhKMjaiygf1mhCaBKSKFX4J7psnCZ2McAaz4WBv49H12oTM', 'pub':'EOS8N44outjyD2LqwdFJtqeCoX65awjx6HD3sWnFntLBF6W6rCsET', staked : '10.0000 EOS'},
    {'name':'useraaaaaadi', 'pvt':'5JiA4gVfa5NRsvWY8GRKWvujDexFtAZGuqRzu9Gro8d5ZEN3Up4', 'pub':'EOS6PDEG8tWx8cAH9UuBmWiv1emULZADdjShmp1GGU3nZL8mst3hm', staked : '10.0000 EOS'},
    {'name':'useraaaaaadj', 'pvt':'5KkEMMkJkoXFmPJCC6Lf7gV78mRyFgcXKcgrHtNsYTq4RQcKXSh', 'pub':'EOS6ep6E2PyTL1Hyq9YUwyzg3ZASRVAHifukdMSjqvcr2EiddMY8h', staked : '10.0000 EOS'},
    {'name':'useraaaaaadk', 'pvt':'5Huv9MJMb3JSdzRpHXHGqiwo3F9m1H7cAiWKqbxffwTLVfUqGaT', 'pub':'EOS66wvzXiUpNhfwKiVP8kHa3q26VnitxE9dCJ2pz7sK4gs9E9fsL', staked : '10.0000 EOS'},
    {'name':'useraaaaaadl', 'pvt':'5JuBGRTJwqCnVMpYsrNb7MtsY29xPHjPKLcmwNEcHEFSfmia16G', 'pub':'EOS8VhQBTpZd8ZKtauD8tcTRXctkWKVLMq9UQeyMpTyPHAdY5cuEJ', staked : '10.0000 EOS'},
    {'name':'useraaaaaadm', 'pvt':'5KfXDYARchyWPKwqDZ8nRZoT2SZ4pSdEUu7ADiWvHMTczBV5AV8', 'pub':'EOS622M6ddBP7cjiA1dP8UmDwKVwv4wcZJaeC278GkmRK16hwFAD1', staked : '10.0000 EOS'},
    {'name':'useraaaaaadn', 'pvt':'5JY2kxFQLwTdb5t9kNm2vNeUk1bMyEPLryoXnwE7n9p5Jvj8KmA', 'pub':'EOS88mnhqGSqnusP8AgYsyKig711Qrqm138NigCyNaN25XdB6QbAw', staked : '10.0000 EOS'},
    {'name':'useraaaaaado', 'pvt':'5JKYVKky4mj1W3QSzBr5TDhTqeZkhSF1fbPa6EjkW9JeWW3ZUKo', 'pub':'EOS7eR4wpvxPuE2co6Fiy185MS3RmVvu5ACqk28GEAGyievpwnbs9', staked : '10.0000 EOS'},
    {'name':'useraaaaaadp', 'pvt':'5KemxY9JRJSWh63pTdPs7SRnRtN2uWtyHAshvsRrA9ZkKoTjd4X', 'pub':'EOS6Jeo5BadnZyUSZuk48DKB6TJGkQ7rL7ndbAovDrnJb8yZwAyD6', staked : '10.0000 EOS'},
    {'name':'useraaaaaaea', 'pvt':'5KcJ8a7WifkHGuaHCKeLaMHAPsvDtS2zEdsLVU2kAzw45LVjfzj', 'pub':'EOS7prNLamVMoiVnQ6nBWK5EBirtG16qwoZgDhgzNANJwj3NzqnEi', staked : '10.0000 EOS'},
    {'name':'useraaaaaaeb', 'pvt':'5JwfdZpZEHkm6yBocfEDRqQ6KSm4cFTXw5mPNZHLc6BLHi8AcR3', 'pub':'EOS6aYhvZmYr8U2nCCyRDudTGCkBG3VcJbq9JXkDcQA3mZwmfBhE9', staked : '10.0000 EOS'},
    {'name':'useraaaaaaec', 'pvt':'5JjHFdwBXKHP2pVEqkLvzKhYP2buQky6dso7dfhPpneSFW4HsEX', 'pub':'EOS4xJFqARzSBGDN78TuwzPxdgVS2ep6QS1uPvtXC3eRsGx6ZRc1d', staked : '10.0000 EOS'},
    {'name':'useraaaaaaed', 'pvt':'5K1jUfwGRi3nKEyVQTaN2oBgqfqRcVsnRBCCxqZwnN2zCCoSctd', 'pub':'EOS4yy1Bdo7bN2eUTqEAj2kkk7r16FAQAi6Zt4Zoh8pgpVa2i4Vkv', staked : '10.0000 EOS'},
    {'name':'useraaaaaaee', 'pvt':'5KBAacUSmESy8ZTDQbzai6fb71tYXaPRJjrVxm2c5nxWqBekjDw', 'pub':'EOS5NQHNp1pjuSvSb6WjDYgRu9AyzJUNgTqqPnsnaT4wSduyFegLu', staked : '10.0000 EOS'},
    {'name':'useraaaaaaef', 'pvt':'5Jr7NTAqZyWPiTZMKXFHXPVfWaRyZL9rNf1PuSn8EYvtjQawMoQ', 'pub':'EOS5e4uvvqjQinG7kSuXfv4MXFozv1LJiiqYLe5o7q5gbLqfNLRcn', staked : '10.0000 EOS'},
    {'name':'useraaaaaaeg', 'pvt':'5JQLSaKPPCkk1g5hPDMUQFYvr6RBy7yWiA3HuuJDX8RDU6skpgk', 'pub':'EOS5ELb8vkCCWQ53gEnt7aLZaVdVNbgowF78HGPcnD8n6Vv7dgdFf', staked : '10.0000 EOS'},
    {'name':'useraaaaaaeh', 'pvt':'5J39jm7k1gRsSpJXhpfMkyexbvxYXy7RCE3ckk6kyD7iXQ3QR8f', 'pub':'EOS7p3Gp3xKWuM4G7gQ7HDH4sRp7jeZBiKH4GrgCuHc8Jqc329SW6', staked : '10.0000 EOS'},
    {'name':'useraaaaaaei', 'pvt':'5JvJcA9Sp66wwpodVbvZw5iSa3VeDVNa6uytQQCr1CKAGVZZrpc', 'pub':'EOS5D9eg84H1tMhLYX11JPnbyLgjg3UJTLNUpZ7ZAMnbrYZAFfKBY', staked : '10.0000 EOS'},
    {'name':'useraaaaaaej', 'pvt':'5JYyG5NwZAqMjY1GqHyN4aSvGCtYrN244oAFLgC9uZ8s7qJMFuN', 'pub':'EOS7StBuyVQP77Wut5Xj6xH2hFPH5NnTmG1ABDKiswNgrKnTawRbV', staked : '10.0000 EOS'},
    {'name':'useraaaaaaek', 'pvt':'5K9FJs149x4xnGWcU7V5B7oW3bHwTyL9dFXJiBcomv7Ghz52xtz', 'pub':'EOS8hagxZmz7FesyYZ7tZ8stUhSVRiQVrXeqSDMCqLEZLjFrMfXDP', staked : '10.0000 EOS'},
    {'name':'useraaaaaael', 'pvt':'5KVWhoci4nP7wEtH8WQNFiAb5uiXzkxeRw7Jxvprdgkfpp1AE5i', 'pub':'EOS5EAyZzDCVw6jgoNLLcTgyvD5ZWdx56SKWTUMF8d4G3oH2rbJav', staked : '10.0000 EOS'},
    {'name':'useraaaaaaem', 'pvt':'5HqUg7SPphJCYvDjTStvXw1nh2HV1WD3EHFLrvqSZNSo5pApPDx', 'pub':'EOS8WiZ3fnfXUSVi2M8i3a1nipqZ8FLz8EKLL1XpjDKK5gmkR23Pt', staked : '10.0000 EOS'},
    {'name':'useraaaaaaen', 'pvt':'5KcX4YWebruTLPdMqrztTuufEwxLLvpavEUHAuBitZgoMpeKpZm', 'pub':'EOS7u25HJNBo7SbzC7TCc9hbVsLXgCcA7qDys9wQUrhcArAD1TGR3', staked : '10.0000 EOS'},
    {'name':'useraaaaaaeo', 'pvt':'5JsF9hcAStgJo97pYdkp6RQkoHLGP5Y9Y7X5apyu9gqBt9dwsSN', 'pub':'EOS8T37DK57VXgUVcBvg1Q5UzrWPDETQvdx3AWTSLZRJUg3dinzHW', staked : '10.0000 EOS'},
    {'name':'useraaaaaaep', 'pvt':'5JMUSjQP1VhV5gK4YZ3Qb3XfMSVFtFP5eiExGL1FAfKoVWPCR7V', 'pub':'EOS6fDupYVAKihqK9eujXJczRF4Vp6zPgaUTpYV5CDXCzC4cHRqka', staked : '10.0000 EOS'},
    {'name':'useraaaaaafa', 'pvt':'5JSdeQu8T39RogRn6T5Sx2o7tHE5KQBh4PgD1VCjwcw15fwfXx6', 'pub':'EOS64WjxaiVVcxgXtzJ3xm8iwYcpcFrs7mtVJkCkQKDJiHv3tJWes', staked : '10.0000 EOS'},
    {'name':'useraaaaaafb', 'pvt':'5JoKEymmmDP1wFaZavP9Uyc35EhU3PwooawpMPdq2futcV838bJ', 'pub':'EOS5VZG9EopxC4BCFSuvpnLGbB67QcmCH1qMDcLdwR65beoA7d511', staked : '10.0000 EOS'},
    {'name':'useraaaaaafc', 'pvt':'5JVESBgZSNVmSTiUB9Zh8naFezyTdKnrSnumhkgUPL8arhkp2CJ', 'pub':'EOS7gXxesvSEsxEezX5sY8tVZwz5b7HFcZRp7jwb69PjmgBVsVNxU', staked : '10.0000 EOS'},
    {'name':'useraaaaaafd', 'pvt':'5KejTUU3bz4HRMyzLzze9FipzxpAGqorHBcg91nHhXbQsTVx9Rn', 'pub':'EOS6YzPuYw1VpCWqhhASmDjF3yLRipAiaMJk687UgJ5EXhSPqw6dN', staked : '10.0000 EOS'},
    {'name':'useraaaaaafe', 'pvt':'5JJZEeJajL94gHPfCVVePMmmD1d3pYV8SpP6heTABpX5L3NKWNb', 'pub':'EOS5PhFYoi6nCBsmGye1FxXJ7gDi3SupjktwRa8KwvQMV3ifELD1f', staked : '10.0000 EOS'},
    {'name':'useraaaaaaff', 'pvt':'5JF5XUm1BHuscvuY4p162vyYxkLSk6uH7U1XG7LM9tX1uMaFdJ9', 'pub':'EOS4vgqzdeRbD4s28X2RYHFffkKg386D3Y4Ut61nPRorkSEJjGMEo', staked : '10.0000 EOS'},
    {'name':'useraaaaaafg', 'pvt':'5KEU86cMhMhGV4bnNgKp6o5w4gt5tm8gs7usLnL61oXT97y288W', 'pub':'EOS5xKWSQTst1FFzp3G3LTaySiK6xt398xi8q8mhhinCW2oz3fcWb', staked : '10.0000 EOS'},
    {'name':'useraaaaaafh', 'pvt':'5K1CaGPD6uYF2bG4tFeEKNJDbFJxXzHcHYRrBbMuLvVgjoXXYUG', 'pub':'EOS7HcLXdD1kXuXoLrMK5q46azR7AXsWySSFkcJtubXjVcKuzG51P', staked : '10.0000 EOS'},
    {'name':'useraaaaaafi', 'pvt':'5HtXSHt8R3msyrTU6eP6cXH2tfPUEpyZbsQxLXTTputkqahLHQa', 'pub':'EOS8BUTHKiBrfRD9KT8zipRYQJ3BJd4EcA4JzNV1Ex6zezcLJ3Wdu', staked : '10.0000 EOS'},
    {'name':'useraaaaaafj', 'pvt':'5JuwjKYfN3iubtWPGSg9BR5qgoG7FhNYWVNuQYXtaxf7KHkF9mV', 'pub':'EOS8PWYLtenmiSMLy9xLPfwHmg7b3vnY8FbQnvPubg3gT8uey1KiE', staked : '10.0000 EOS'},
    {'name':'useraaaaaafk', 'pvt':'5KQkD7wkNc47Zjwp62RzgZdCVYjV4xg4brKeidFuRVMQ9vwYf4G', 'pub':'EOS79PEwoC71p7VyWgnoYUE8UsZARYW1iiAq8eGXNWPWLibeeYw8Y', staked : '10.0000 EOS'},
    {'name':'useraaaaaafl', 'pvt':'5KSVDSRdVNX4PDqa8W6VACqDACNeJqvGEdT5nw4C1pzNX9Vkmwg', 'pub':'EOS8NFRKypSz2mPsFXySPPER7PDr3Ax37d9zdvSMvjSagsTrAAVbd', staked : '10.0000 EOS'},
    {'name':'useraaaaaafm', 'pvt':'5KPCij9nG3nDrEe4fHpxW8Nogs9ws9ou6wB8Ly9diQntbzfVen7', 'pub':'EOS6yWjCBmpnAo2Nvxf1LPw9ByeyMmsAeWwipxsLzbC6E8DRRGrLT', staked : '10.0000 EOS'},
    {'name':'useraaaaaafn', 'pvt':'5KFTHvLYFstoq7GDN7EJeYQEiiBCZJb3CvwNoYoz9t1ZXi3aBhP', 'pub':'EOS7DiUrK2ZXic3s6XepCK5E2kRznbDH7DoN31fAFmaUw7NjYfGEV', staked : '10.0000 EOS'},
    {'name':'useraaaaaafo', 'pvt':'5J1U6N7Cdfo1Ta62CnH9xSBP6FRwcbMEjZ2BkNX5bEoDN6ouqRQ', 'pub':'EOS8gMwCFPzWnS9wF2hFQ9Tjb265eSvgqMc5cq9fn5KQNdJUWUGPr', staked : '10.0000 EOS'},
    {'name':'useraaaaaafp', 'pvt':'5JVBHvfEKvnGqYVk8bUu95KAxbTeBkSemu9Hov1gLUx7C44uFRg', 'pub':'EOS5LntefgGJyMsgSK4dGabGgfoG5MpQesox3G2A5fAMwYohFU1jB', staked : '10.0000 EOS'},
    {'name':'useraaaaaaga', 'pvt':'5KFmwodLexxVrsXMM6cLfPKWUaApNCXFJtUytDGZQzZoYtCPbyH', 'pub':'EOS652djkk2vSWKSAhDaerWvtpxzVcZFWqh6HW4VE1beKYNTfvpDj', staked : '10.0000 EOS'},
    {'name':'useraaaaaagb', 'pvt':'5JS1zkG3zCgGMw4WHN75YxMBZWUETd3XciqgiZshTNiUySaGWbM', 'pub':'EOS64rb5mH4aurzmyvcb8DETvBqpLnrb1UCJPCEMtazjUjn7Epyyr', staked : '10.0000 EOS'},
    {'name':'useraaaaaagc', 'pvt':'5JaHAYBXkeU813age5SahUSXuHoiRVod3F8UiL7uvngdY4AYBwY', 'pub':'EOS8EfrimFNK9D6WBPtkUNYNJHJZtK1QSB4KQY511F46iapYmMsX5', staked : '10.0000 EOS'},
    {'name':'useraaaaaagd', 'pvt':'5JcKP6b46TBCMXE8Z3jiXQax8jhVGqFRTbR5puYfFuHKywq1ZiW', 'pub':'EOS7LUeVNFAQq4DEx7YXYoCJDH49ReRvtLAodLpznv8cpHnh2Tb5j', staked : '10.0000 EOS'},
    {'name':'useraaaaaage', 'pvt':'5JHpPEdywgKFLU9EYSSkhoBrAW3mmJwonoC2f13X3ts4A6iZRNN', 'pub':'EOS6MLFz7ZqQLhkDS6zhWro7bZyzGv1Ac3ugCMbvX9mXo5r1JeBAs', staked : '10.0000 EOS'},
    {'name':'useraaaaaagf', 'pvt':'5JZ6TUsaxoixAMmropBvMG4Jf1HFv9scW9zKaQvNEeqZTUYAR8y', 'pub':'EOS6bciiBepBU1QML7gahkvH3otZJQ6eXzt936tmdTcDRv5onibA5', staked : '10.0000 EOS'},
    {'name':'useraaaaaagg', 'pvt':'5JPtpHAJ43aBxKkxz6ofzkQmwWdGrQeevbL3KTMcXkZK9KRMiB6', 'pub':'EOS8GGD48CVkxFq4XN1auEhf3fgBMTepnu2uHa8VtE2gWMngHhABo', staked : '10.0000 EOS'},
    {'name':'useraaaaaagh', 'pvt':'5JcdgG5Nocudx4UoshVSqv93MQrNgWnAiRoV9NF9wMvPT4LnoaV', 'pub':'EOS8AArt5Ubyg2trQq9zUbaSTfrKCujv2BUzN1HNtVX9K29tGuMCb', staked : '10.0000 EOS'},
    {'name':'useraaaaaagi', 'pvt':'5KQxHXw9foBqQa8GuQuywLv4fewLWoYK4W2N1U29P6DoNHXRWnk', 'pub':'EOS6RydBnHYGJ5NmCDZ2YEcp3x7w43Rq9Bzyr3rHpQdash22Bpuea', staked : '10.0000 EOS'},
    {'name':'useraaaaaagj', 'pvt':'5Jx61UdwBbxKsNohuHDv8nmj9hvUu2ybwyEr1VoaJX92NKjJwVV', 'pub':'EOS72Aiymi8TX4oPz4CHLqa5fKuXbZiBLyZprB5sDLiM42vnH9kBA', staked : '10.0000 EOS'},
    {'name':'useraaaaaagk', 'pvt':'5JFtNdxPf9XTe7kQhLVJEWAGBtGCWEWGPfVUxWAWAhGBmz3epwg', 'pub':'EOS8FWkUxHPCJVENUmcyWz8peRYgE9hZWw6P2aejDwp9SaDBsSmLX', staked : '10.0000 EOS'},
    /*
    {'name':'useraaaaaagl', 'pvt':'5Jqymrmix611rV6MXgCgwRcAoRBNDvje5cygUGd2w8cpfd63ro4', 'pub':'EOS8Ri8f2F8gcdLukDE8s1mv2j6Gp23UDLmEd3KTAcmJr9aiGoBBM', staked : '10.0000 EOS'},
    {'name':'useraaaaaagm', 'pvt':'5Kf6tAqRoR2R12Ef1oU1ndkPusWgLWLHdhgQwo2uVJNfAw415xx', 'pub':'EOS5Z3JdDaoXpzEf7avPerHJrvAP8Knrzzkz7qAD9M97YEr1sRWEc', staked : '10.0000 EOS'},
    {'name':'useraaaaaagn', 'pvt':'5JtmRYB16A8g6ciSXNF97rgGSuC6471LHWnsYPeFbeG6JztkUv6', 'pub':'EOS6WuqhLurBgaJfAiq1hcYcoHVMvi6AjP3Ci7y8LznJLwe4r2bLY', staked : '10.0000 EOS'},
    {'name':'useraaaaaago', 'pvt':'5JPzrVhgUV5T1zWHNTcTDcNrm93XzDtdWKxbTXjBiraNCH4yac7', 'pub':'EOS7WXFMr82NeYfcspeUgzFz27NYyVnfZniRG2f2DhmJ3VtTaLpzq', staked : '10.0000 EOS'},
    {'name':'useraaaaaagp', 'pvt':'5HwkcWz1xpqTp6tE6ugdM7eok4FwCs5msrfwUSrCEenN5J74nfN', 'pub':'EOS7KANiD4YqT9mqvV6mfCyBKFJZDAjSmMhBBwaT5HJE9BxLq9Q1j', staked : '10.0000 EOS'},
    {'name':'useraaaaaaha', 'pvt':'5JpJi7WqHBMF5HNfHUTKZCZuvZzqyaRx69yrXLMR7DmT9MS3fS4', 'pub':'EOS5sydtBrhhzLfbVqDHvdsYncdjVzDwqKvm7sHUrr6JSBdR2XfB6', staked : '10.0000 EOS'},
    {'name':'useraaaaaahb', 'pvt':'5JW5wb8jGsie7JY2VzudGH7peaBkc118i5qKe1orBDKmuWWG2Zz', 'pub':'EOS52LmX7hYucuxrMjREgiJ3kAMgEvHWRLGhmQawK8gBy6Ad1nqfh', staked : '10.0000 EOS'},
    {'name':'useraaaaaahc', 'pvt':'5KeHHcs3zcZZevXq8mMaEbHiHDKW5wQAq4mApSHngrJTFUSKxus', 'pub':'EOS7KEVur37oGwuNBZBqaHae6qBkhrFXQ6dPfTJQLFEjTkwMxWMHS', staked : '10.0000 EOS'},
    {'name':'useraaaaaahd', 'pvt':'5JVcetHUGJL9Hr6krB8c2kFDuPs5UrcMZW2fTDZnGDfJZZidMVG', 'pub':'EOS7UKmNv8x5foh4FM44SWytrSCzGUroCLEN6PAByy6qB4s2LAg7r', staked : '10.0000 EOS'} */
];

const committees = [{
    committeeman : 'committeeaaa',
    category : 'emergency',
    is_oversight : 1
}, {
    committeeman : 'committeeaab',
    category : 'watchman',
    is_oversight : 1
}];

const reviewers = [{
    reviewer : 'revieweraaaa',
    committee : 'committeeaaa',
    first_name : 'Thomas',
    last_name : 'Do'
}, {
    reviewer : 'revieweraaab',
    committee : 'committeeaaa',
    first_name : 'Thomas',
    last_name : 'Cox'
}];

const proposers = [{
    account : 'proposeraaaa',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaab',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaac',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaad',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaae',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaaf',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaag',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaah',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaai',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaaj',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaak',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaal',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaam',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaan',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaao',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaap',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}, {
    account : 'proposeraaaq',
    first_name : 'Thomas',
    last_name : 'Do',
    img_url : 'http://www.google.com',
    bio : 'hi~',
    country : 'KR',
    telegram : '@yepp4you',
    website : 'http://www.block.one',
    linkedin : 'thomas-do-01911516a',
}];

const proposals = _.map(proposers, (proposer, index) => {
    return {
        proposer : proposer.account,
        committee : 'committeeaaa',
        subcategory : 1,
        title : `wps project title ${proposer.account}`,
        summary : 'wps proejct summary',
        project_img_url : 'http://www.google.com',
        description : 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        roadmap : 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        duration : 30,
        members : ['yepp4you1', 'yepp4you2', 'yepp4you3'],
        funding_goal : '100.0000 EOS'
    };
});

module.exports = exports = {user, eosAccounts, committees, reviewers, proposers, proposals};
