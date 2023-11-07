const logo = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 200 200" width="200" height="200">
<title>New Project (9)</title>
<defs>
    <image width="200" height="200" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAu5QTFRFAAAAu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7r6+vpKSkmpqakJCQkZGRm5ubpqamsLCwtLS0q6uroqKimZmZj4+Pk5OToKCgrKysra2to6Ojjo6Onp6eqKiosrKyXl5eXV1dZ2dnLi4uAgICAAAABgYGNzc3cXFxsbGxfX19SUlJEhISERERKioqQ0NDX19flpaWJCQkDAwMQUFBe3t7b29vISEhKSkpfHx8fn5+MDAwCAgIODg4dHR0s7OzYWFhFRUVkpKSt7e3bW1tFhYWurq6cnJyGxsbjY2NHR0dLCwsqqqqGBgYUlJSi4uLDw8PPz8/iIiIuLi4VlZWAQEBGhoaVFRUSEhIU1NTNDQ0eXl5WVlZVVVVDQ0Nl5eXDg4OT09Pbm5uhYWFgICAa2trRkZGdXV1BwcHOTk5YmJigoKCeHh4ampqCQkJWFhYJSUlIiIiaWlpQkJCioqKMTExg4ODmJiYXFxcHx8fY2NjFBQUGRkZnJycrq6uQEBANjY2CgoKTExMBQUFpaWltra2W1tbV1dXKCgocHBwtbW1BAQEaGhoTk5OR0dHLS0tSkpKUFBQPDw8c3NzExMTh4eHICAgUVFRNTU1lZWVnZ2dLy8vZGRkenp6d3d3RUVFgYGBPT09KysrHBwcubm5AwMDHh4ehISEbGxsqampTU1NdnZ2lJSUOjo6RERES0tLMjIyjIyMEBAQCwsLoaGhYGBgOzs7ZWVlPj4+iYmJZmZmWlpaMzMzp6enf39/hoaGJiYmJycnu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u785DLXgAAAPp0Uk5TADRpj6jB2/T/jB2K7ogaMfynKhipAm/x8GwGkAMOu7gPINfVIg3KyWAb8xywOCX+J4AB3t3c6Pj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////tIMk7aDSE1SJZqtZ2AoAAAo0SURBVHic7Z17XBXHFcc3EXWammpq0rS1ibGpKU20adJqeAiCqFdBXtnoBRSISDSEQIJetCG+EEkMEQ2IqBBBo0GN8lAEMVSMJVSiIRqUktSorUWssU3fr/96797Hmd3Z3cu9d8uO+5nfH4jnnJ17vnd2Z87MrB85jtAddw7xGzpsOKJSw4cN9fvanXeQWUt119dH6J3rQDTi7m+oYoz0G6V3igPVqHu+qYgx+l69s/NM94yWxbjvW/frnZmn+vZ37iM5vjtG77S80ZDvSTkeeFDvnLzT2IfEHOO+r3dG3urhH+Ac4x/ROx/v9cPxGIif3tn4Ij/g8Nc7F9/k7+T40aN6p+KbHn3MATJB70x81QQ7x0S98/BdE43RIY4u+fHjeqfhux7/iRXkCb2z0EJPcNyTP9U7CS30sye5cXrnoI3G3e6ToVP+3G1ZvZMaw43VOwVtNJabpHcK2mgSN1nvFLTRZO4pvVPQRk9xemeglRgIbWIgtImB0CYGQpsYCG1iILSJgdAmBkKbGAhtYiC0iYHQJgZCmxgIbWIgtImB0CYGQpsYCG1iILSJgdAmBuJSQGBQ8JSQ0KkDjQ8LnxYxfcZM04CCZ82OiJwRNSfafSQJEhPr1BS3VwfGxT/NO/TM3HlukzMnJCY54/n5C5JTIlWCU2OfdcUuTFtkVm+aBHFdzMe5SSv9OV6ixUvU4p/PkMbz/AuZL2bJxZqzX5KGZr78fwHJWbqMTIvnn0uwKFyQu1wu3taVaRHS2KmxC+UiM1ZoDxLyc4W0+Ffy5OKDXlWKt2qlJHjVaqXINWEag6Q/o5zW6rVkfK5KvBQkf12Bcuj6EE1BCtXS4vl0afxr6vGvi4I3qAev0hDkDfWP4p+WPJZFbuJFPfKmm+CNczQDKRbdJ5s2v1VSuqXsBdyWFI7HbxVnUr5te+6OtRWVRRlvOyyFWHCCKHbZzty1S+K2iWxVmoFU4ylXOIxhu97GzLux8HdEaezZi7nerXlJApKFD1f7nE+bSdRN+zUCKcXazMRGEVMV5ogC+wHM/F6qtLVVa0QgKVgw3lEHYSLlN8lN9F6AYB2SIXIc2geeWpc1F+8OuUKmuA4e9qn1ENwgioraBJ7tmoBgN/HhI2LXy+AqOOg0rgfjqwplBuDVQPCyRnEQ9oUslOkSz0HmQsBRqS8NfE0OUyTWIe/Kc2DC6hKi2sHuhArySo9BLPBMFxBF4hS4uNlhagJTsluOQAheTZQ6x8CZqAFIKvjrSO97QNlit8D3WDDTLQg2UDcRzujjLudyDUDeB/8u0tsKXvvQaQJDtVsO9AuIfof0ngAvOSl6DNIGfpliYR54KwVDCRha3YMshugA0ntS7aM9BvlA9bNmgLdGMJwCwxvuQaDS/6WMFxu3EnwHgf4tl/HOkXbAdjDMgLDQWIkcdpjWm8m2UTu0RZSlnoN86HJvlPEGwNVpgqEDDFgBjo1udtknGAvU7/EyjWMjOTklegwCBYdc77fA1b8SDNjMEghh2MxpV7T0a5AZEdFpcL/pOwjcxptkvGa4OlMwlIGhE8IUegT7Gj6SaTwY3EW+g8DAUiDjDYWrywQDVrYGuwVBsBaQq9WxEfB930GwCqWR9IaA1977Z8CA1e9KIMtcBpkpD52F+I99B+kCfxTp3QveM4IhV7Y5JRDYyDousxmDjYAlvoNgrcmUbjHg/UQwYI/1NghzDL9QmTvKWWxoILaIEDoH3tm+g2BjYBnpPQ/eQ4IBqzEPE0X8p9IeWar24d0wyySRn+wxSP4Fl78+R+rMg4ngosOEPVOVbkEiIJicEbH5sJZwerEewb70HqlvF/jaHKY4MK13C2LBFohHpNHYntKvtQDBFhjnJa5GbF3kHFd6ofjmt7gDQXUQ/JkkOPQw+GQeIM9BOiGA/1zswhaqC10PxGdY/G/E8bDt6ly7Po8FnxYHXwLPszJpebH58AVEHBcdC3yMbXWecVkDL4C1XDxskj2Cr2dXixZi+IYQOfh6BYKtR/nys2DHBmZ+PrZNJNovvYxVXDI9gs/efBLUAi2XMbv0jnYLQqqZyJhP7hG+TVPCFdyKDwMm8UlHZrpzqR8Mm+6wLZKGxxZeFWxHTn2KGcsPIhl5A4I/kjb9trl6o9giLk5TeYl+t/xEfJXIAiBZkvOKAwsu1ostZ5GcvAIJOKAWZK348sVNutv0xp4RhA6qnkDI7qB4DYJCVEmqeqVt7lILtwnfcWuvV4u81KIlCJp1QjmoVqYqDk5SjrdJVL1cUzwN4wt+L4/hNQjqXqkQckE669llildutaBPcribpXTWU9+uxOE1iHXh2SdzQnY88ZrSJ+2VOdO1af7mQDK457xMZP1OlfNv70EQilpZLXYvPko8HbiCOqok7VW3bZ2mELyiYb0otHzPddV3Enx888G8I6Wj7IMrG/pfW5l9Q+ExxBXdnv164pq6PX1lHTEVMhWTSOFna1q7+jLqatsK/+D25QX2LgptYiC0iYHQJgZCmxiIL4rokFoOzbtZVNR6MiUuJrZ96w5v2tQDxNwnWXhZ1hXZlq8dwqpk5pdeNaoHSJH0hZSrS20/U7NtP3OqbnnVqA4gAcSNZRK6ol9YXWUP4MxUTjqANMmsP6wqEbrlFvmiwMA0+CC9l1BWqOP3fKjOLXXdtj+aXOci15xLtNQt9rVzHrFnjmvwQWIij17pWoqm216aSYAjlheFA63Opb012f3WXwL79jfYcJtQXMpmE0qx/vqF6qpt0EFyahNvoPxt+VVh1kH3Q9fuScs54Y91V5PNqAuhKV+Go0jrLRi4s2NFdxkqnY5QscI+kEODDpKwrxOh9sqeU9bfN8Bjf73Y9tOcWWNBN0pR6IksZLE687syItEf/4SsDGEXo6x+5XYHHWTufoSm1jZett7wcZmdTmuY/etOf8WCLG3IfKAHWfoWIUvG4RKEGlDgdmSp/Qqh0Hjlx2SwQfK+ykeWrmuoFeUlBsPNssV+sPrnIIRK1wb270aNN6uQuf+jdOvgEIeWrGrcHdeEohYobtEMPsj1ZBRQaJ0QaxrKeo8Fucz29zDDba99fLJup7n5ZkN488myEtvfZ6WZp6f0fR5SsWhNuHybggYbZFpXcr8w+sxGjfCEhNpPMMKck7rJOmDdOo1Snc9ERA7qrjym9M8HBOlY/e4v1rI1nUBKrSMrUan4JH1A8lJQ/m43/0THQ+kDUnwKNRDvZPsmfUCiz3XInp/5ILbUpU0MhDYxENrEQGgTA6FNDIQ2MRDaxEBoEwOhTQyENjEQ2sRAaBMDoU0MhDYxENrEQGgTA6FNDIQ2MRDaxEBok1FADPPf0U42Csgko4D8xSggY4wC4m8UkHEGAZnEGQTkr0YB+ZtBQCZwBgGZaBAQW4cYAeTvjxkExJ8zBsg/OGOAPDLeGCD//BdnCJAHH+AMAXI3xxkB5P5/c4YAuXc0ZwCQUX4jOe72Bxnxn7s47rYGGT5sqN+Q/46UUnDc/wC+T3Fq6veegwAAAABJRU5ErkJggg=="/>
</defs>
<style>
</style>
<use id="Background" href="#img1" x="0" y="0"/>
</svg>`;

export default logo;